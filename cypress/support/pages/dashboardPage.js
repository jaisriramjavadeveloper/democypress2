class DashboardPage {
    selectItem(itemName) {
      cy.contains('.inventory_item_name', itemName) // Find the item by its name
        .parents('.inventory_item') // Move up to the parent item
        .find('.btn_inventory') // Find the button within the item
        .contains('Add to cart') // Ensure we are selecting the correct button
        .click(); // Click the button
    }
  
    goToCart() {
      cy.get('.shopping_cart_link').click();  // Go to the cart page
    }
  
    verifyItemAdded(itemName) {
      cy.get('.cart_item').should('contain', itemName);  // Check that the item is in the cart
    }
  }
  
  export const dashboardPage = new DashboardPage();
  