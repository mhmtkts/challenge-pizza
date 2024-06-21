beforeEach(() => {
  cy.visit("http://localhost:5173/");
});

describe("SANITY CHECK", () => {
  it("open home page", () => {
    cy.url().should("contain", "http://localhost:5173/");
  });
});

describe("SUCCESS", () => {
  it("open the order page", () => {
    cy.get('[data-cy="route-orderpizza"]').as("orderpizza");
    cy.get("@orderpizza").click();
    cy.url().should("contain", "/orderpizza");
  });
  it("submit form", () => {
    cy.get('[data-cy="route-orderpizza"]').as("orderpizza");
    cy.get("@orderpizza").click();

    cy.get('[data-cy= "input-size"]').check();
    cy.get("select").select("İnce Hamur");
    cy.get('input[type="checkbox"]').check([
      "Pepperoni",
      "Sosis",
      "Kanada Jambonu",
      "Tavuk Izgara",
    ]);
    cy.get('[data-cy = "input-name"]').type("Mahmut AKTAŞ");
    cy.get('[data-cy = "input-orderbutton"]').click();
    cy.url().should("contain", "/success");
  });
});
