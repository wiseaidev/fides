import { Text, useToast } from "@fidesui/react";
import { useSelector } from "react-redux";

import { DatasetCollection } from "~/types/api";

import { errorToastParams, successToastParams } from "../common/toast";
import {
  selectActiveCollectionIndex,
  selectActiveDataset,
  setActiveCollectionIndex,
  useUpdateDatasetMutation,
} from "./dataset.slice";
import EditCollectionOrFieldForm from "./EditCollectionOrFieldForm";
import EditDrawer from "./EditDrawer";
import {
  getUpdatedDatasetFromCollection,
  removeCollectionFromDataset,
} from "./helpers";

const DESCRIPTION =
  "Collections are an array of objects that describe the Dataset's collections. Provide additional context to this collection by filling out the fields below.";
interface Props {
  collection: DatasetCollection;
  isOpen: boolean;
  onClose: () => void;
}
const EditCollectionDrawer = ({ collection, isOpen, onClose }: Props) => {
  const dataset = useSelector(selectActiveDataset);
  const collectionIndex = useSelector(selectActiveCollectionIndex);
  const [updateDataset] = useUpdateDatasetMutation();
  const toast = useToast();

  const handleSubmit = async (
    values: Pick<
      DatasetCollection,
      "description" | "data_qualifier" | "data_categories"
    >
  ) => {
    if (dataset && collectionIndex !== undefined) {
      const updatedCollection = { ...collection, ...values };
      const updatedDataset = getUpdatedDatasetFromCollection(
        dataset,
        updatedCollection,
        collectionIndex
      );
      try {
        await updateDataset(updatedDataset);
        toast(successToastParams("Successfully modified collection"));
      } catch (error) {
        toast(errorToastParams(error as string));
      }
      onClose();
    }
  };

  const handleDelete = async () => {
    if (dataset && collectionIndex !== undefined) {
      const updatedDataset = removeCollectionFromDataset(
        dataset,
        collectionIndex
      );
      try {
        await updateDataset(updatedDataset);
        toast(successToastParams("Successfully deleted collection"));
        const newActiveCollectionIndex =
          dataset.collections.length > 0 ? 0 : undefined;
        setActiveCollectionIndex(newActiveCollectionIndex);
      } catch (error) {
        toast(errorToastParams(error as string));
      }
      onClose();
    }
  };

  return (
    <EditDrawer
      isOpen={isOpen}
      onClose={onClose}
      description={DESCRIPTION}
      header={`Collection Name: ${collection.name}`}
      onDelete={handleDelete}
      deleteTitle="Delete Collection"
      deleteMessage={
        <Text>
          You are about to permanently delete the collection named{" "}
          <Text color="complimentary.500" as="span" fontWeight="bold">
            {collection.name}
          </Text>{" "}
          from this dataset. Are you sure you would like to continue?
        </Text>
      }
    >
      <EditCollectionOrFieldForm
        values={collection}
        onClose={onClose}
        onSubmit={handleSubmit}
        dataType="collection"
      />
    </EditDrawer>
  );
};

export default EditCollectionDrawer;
