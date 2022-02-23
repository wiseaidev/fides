
from numpy import empty
import pytest

from fidesops.graph.config import Collection, Dataset, FieldAddress, FieldPath, ObjectField, ScalarField
from fidesops.util.saas_util import merge_datasets


class TestSaaSUtil:
    """
    Multiple scenarios for merging SaaS config references with SaaS datasets.

    SaaS datasets will not contain references and serve only as a definition
    of available data from the given SaaS connector. Any references to other datasets
    will be provided by the SaaS config.
    """
    def test_add_identity(self):
        """Augment a SaaS dataset collection with an identity reference"""

        saas_dataset = Dataset(
            name="saas_dataset",
            collections=[Collection(
                name="member",
                fields=[
                    ScalarField(
                        name="list_id"
                    ),
                ])],
            connection_key="connection_key",
        )

        saas_config = Dataset(
            name="saas_config",
            collections=[Collection(
                name="member",
                fields=[
                    ScalarField(
                        name="query",
                        identity="email"
                    ),
                ])],
            connection_key="connection_key",
        )

        merged_dataset = merge_datasets(saas_dataset, saas_config)
        collection = merged_dataset.collections[0]
        assert len(collection.fields) == 2

        list_id_field = collection.top_level_field_dict[FieldPath("list_id")]
        assert len(list_id_field.references) == 0
        
        query_field = collection.top_level_field_dict[FieldPath("query")]
        assert len(query_field.references) == 0
        assert query_field.identity == "email"

    @pytest.mark.saas_connector
    def test_add_reference(self):
        """Augment a SaaS dataset collection with a dataset reference"""
        
        saas_dataset = Dataset(
            name="saas_dataset",
            collections=[Collection(
                name="conversations",
                fields=[
                    ScalarField(
                        name="campaign_id"
                    ),
                ])],
            connection_key="connection_key",
        )

        saas_config = Dataset(
            name="saas_config",
            collections=[Collection(
                name="conversations",
                fields=[
                    ScalarField(
                        name="conversation_id",
                        references=[
                    (FieldAddress("saas_connector", "member", "unique_email_id"), "from")
                ]
                    ),
                ])],
            connection_key="connection_key",
        )

        merged_dataset = merge_datasets(saas_dataset, saas_config)
        collection = merged_dataset.collections[0]
        assert len(collection.fields) == 2

        campaign_id_field = collection.top_level_field_dict[FieldPath("campaign_id")]
        assert len(campaign_id_field.references) == 0
        
        conversation_id_field = collection.top_level_field_dict[FieldPath("conversation_id")]
        assert len(conversation_id_field.references) == 1
        assert conversation_id_field.references[0] == (FieldAddress("saas_connector", "member", "unique_email_id"), "from")

    @pytest.mark.saas_connector
    def test_add_with_object_fields(self):
        """Verify complex SaaS dataset fields are preserved after merging"""
        saas_dataset = Dataset(
            name="saas_dataset",
            collections=[Collection(
                name="member",
                fields=[
                    ObjectField(name="name", fields={
                        "first": ScalarField(name="first"),
                        "last": ScalarField(name="last")
                    })
                ])],
            connection_key="connection_key"
        )

        saas_config = Dataset(
            name="saas_config",
            collections=[Collection(
                name="member",
                fields=[
                    ScalarField(
                        name="query",
                        identity="email"
                    ),
                ])],
            connection_key="connection_key"
        )

        merged_dataset = merge_datasets(saas_dataset, saas_config)
        collection = merged_dataset.collections[0]
        assert len(collection.fields) == 2

        quert_field = collection.top_level_field_dict[FieldPath("query")]
        assert len(quert_field.references) == 0
        assert quert_field.identity == "email"
        
        name_field = collection.top_level_field_dict[FieldPath("name")]
        assert isinstance(name_field, ObjectField)
        assert len(name_field.fields) == 2

    @pytest.mark.saas_connector
    def test_merge_same_scalar_field(self):
        """Merge two scalar fields between datsets with the same collection/field name"""
        saas_dataset = Dataset(
            name="saas_dataset",
            collections=[Collection(
                name="conversations",
                fields=[
                    ScalarField(
                        name="query"
                    ),
                ])],
            connection_key="connection_key",
        )

        saas_config = Dataset(
            name="saas_config",
            collections=[Collection(
                name="conversations",
                fields=[
                    ScalarField(
                        name="query",
                        references=[
                    (FieldAddress("saas_connector", "member", "unique_email_id"), "from")
                ]
                    ),
                ])],
            connection_key="connection_key",
        )
        merged_dataset = merge_datasets(saas_dataset, saas_config)
        collection = merged_dataset.collections[0]
        assert len(collection.fields) == 1
        assert len(collection.fields[0].references) == 1

    @pytest.mark.saas_connector
    def test_merge_same_object_field(self):
        """Merge a scalar and object field between datsets with the same collection/field name"""
        saas_dataset = Dataset(
            name="saas_dataset",
            collections=[Collection(
                name="member",
                fields=[
                    ObjectField(name="name", fields={
                        "first": ScalarField(name="first"),
                        "last": ScalarField(name="last")
                    })
                ])],
            connection_key="connection_key"
        )

        saas_config = Dataset(
            name="saas_config",
            collections=[Collection(
                name="member",
                fields=[
                    ScalarField(
                        name="name",
                        identity="email"
                    ),
                ])],
            connection_key="connection_key"
        )

        merged_dataset = merge_datasets(saas_dataset, saas_config)
        collection = merged_dataset.collections[0]
        assert len(collection.fields) == 1
        name_field = collection.top_level_field_dict[FieldPath("name")]
        assert isinstance(name_field, ObjectField)
        assert len(name_field.fields) == 2
        assert name_field.identity == "email"