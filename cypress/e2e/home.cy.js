describe("Clothing Site with Cart Functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the product details", () => {
    cy.contains("Classic Tee"); // Product title
    cy.contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit"); // Product description
    cy.contains("$75.00"); // Product price
    cy.contains("Size"); // Size label
    cy.contains("S"); // Size option S
    cy.contains("M"); // Size option M
    cy.contains("L"); // Size option L
  });

  it("should add a product to the cart and update the mini cart", () => {
    // Select a size and add to cart
    cy.get(".size-button").contains("S").click();
    cy.get(".add-to-cart-button").click();

    // Verify mini cart is updated
    cy.get(".cart-button").should("contain", "My Cart (1 items)");
    cy.get(".cart-button").trigger("mouseover");
    cy.contains("Size: S"); // Verify the product is added to the mini cart

    // Add the same product with a different size
    cy.get(".size-button").contains("M").click();
    cy.get(".add-to-cart-button").click();

    // Verify mini cart is updated with the correct quantity
    cy.get(".cart-button").should("contain", "My Cart (2 items)");
    cy.contains("Size: M"); // Verify the second product is added to the mini cart

    // Add another product
    cy.get(".size-button").contains("L").click();
    cy.get(".add-to-cart-button").click();

    // Verify mini cart is updated with the correct quantity and only unique products
    cy.get(".cart-button").should("contain", "My Cart (3 items)");
    cy.contains("Size: L"); // Verify the third product is added to the mini cart
  });
});
