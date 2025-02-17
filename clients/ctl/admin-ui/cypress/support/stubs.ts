export const stubTaxonomyEntities = () => {
  cy.intercept("GET", "/api/v1/data_category", {
    fixture: "data_categories.json",
  }).as("getDataCategory");
  cy.intercept("GET", "/api/v1/data_qualifier", {
    fixture: "data_qualifiers.json",
  }).as("getDataQualifier");
  cy.intercept("GET", "/api/v1/data_subject", {
    fixture: "data_subjects.json",
  }).as("getDataSubject");
  cy.intercept("GET", "/api/v1/data_use", {
    fixture: "data_uses.json",
  }).as("getDataUse");
};

export const stubSystemCrud = () => {
  cy.intercept("POST", "/api/v1/system", { fixture: "system.json" }).as(
    "postSystem"
  );
  cy.intercept("GET", "/api/v1/system/*", { fixture: "system.json" }).as(
    "getSystem"
  );
  cy.intercept("PUT", "/api/v1/system*", { fixture: "system.json" }).as(
    "putSystem"
  );
  cy.fixture("system.json").then((system) => {
    cy.intercept("DELETE", "/api/v1/system/*", {
      body: {
        message: "resource deleted",
        resource: system,
      },
    }).as("deleteSystem");
  });
};

export const stubDatasetCrud = () => {
  // Dataset editing references taxonomy info, like data categories.
  stubTaxonomyEntities();

  // Create
  cy.intercept("POST", "/api/v1/dataset", { fixture: "dataset.json" }).as(
    "postDataset"
  );

  // Read
  cy.intercept("GET", "/api/v1/dataset", { fixture: "datasets.json" }).as(
    "getDatasets"
  );
  cy.intercept("GET", "/api/v1/dataset/*", { fixture: "dataset.json" }).as(
    "getDataset"
  );

  // Update
  cy.intercept("PUT", "/api/v1/dataset/*", { fixture: "dataset.json" }).as(
    "putDataset"
  );

  // Delete
  cy.fixture("dataset.json").then((dataset) => {
    cy.intercept("DELETE", "/api/v1/dataset/*", {
      body: {
        message: "resource deleted",
        resource: dataset,
      },
    }).as("deleteDataset");
  });
};

export const stubPlus = (available: boolean) => {
  if (available) {
    cy.intercept("GET", "/api/v1/plus/health", {
      statusCode: 200,
      body: {
        status: "healthy",
        core_fidesctl_version: "1.8",
      },
    }).as("getPlusHealth");
  } else {
    cy.intercept("GET", "/api/v1/plus/health", {
      statusCode: 400,
      body: {},
    }).as("getPlusHealth");
  }
};
