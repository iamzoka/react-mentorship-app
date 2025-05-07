describe("Counter Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders with initial value from props", () => {
    // Since we're testing the component in the context of the app,
    // we'll verify the default value of 0
    cy.get("h2").should("contain", "Counter: 0");
  });

  it("decrements the counter when decrease button is clicked", () => {
    // First verify initial state
    cy.get("h2").should("contain", "Counter: 0");

    // Click the decrease button
    cy.contains("button", "Decrease").click();

    // Verify the counter has been decremented
    cy.get("h2").should("contain", "Counter: -1");
  });

  it("increments the counter when increase button is clicked", () => {
    // First verify initial state
    cy.get("h2").should("contain", "Counter: 0");

    // Click the increase button
    cy.contains("button", "Increase").click();

    // Verify the counter has been incremented
    cy.get("h2").should("contain", "Counter: 1");
  });

  it("allows multiple increments and decrements", () => {
    // First verify initial state
    cy.get("h2").should("contain", "Counter: 0");

    // Click increase twice
    cy.contains("button", "Increase").click();
    cy.contains("button", "Increase").click();

    // Verify the counter is at 2
    cy.get("h2").should("contain", "Counter: 2");

    // Click decrease once
    cy.contains("button", "Decrease").click();

    // Verify the counter is at 1
    cy.get("h2").should("contain", "Counter: 1");
  });
});
