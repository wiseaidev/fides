describe("Nav Bar", () => {
  it("Renders all page links", () => {
    cy.visit("/");

    // Enabled links
    cy.getByTestId("nav-link-Datasets");
    cy.getByTestId("nav-link-Taxonomy");
    cy.getByTestId("nav-link-Systems");

  });

  it("Renders the active page based on the current route", () => {
    // Start on the dataset page.
    cy.visit("/dataset");

    // The nav should reflect the active page.
    cy.getByTestId("nav-link-Datasets").should("have.attr", "data-active");
    cy.getByTestId("nav-link-Taxonomy").should("not.have.attr", "data-active");

    // Navigate by clicking a nav link.
    cy.getByTestId("nav-link-Taxonomy").click();

    // The nav should update which page is active.
    cy.getByTestId("nav-link-Taxonomy").should("have.attr", "data-active");
    cy.getByTestId("nav-link-Datasets").should("not.have.attr", "data-active");
  });
});
