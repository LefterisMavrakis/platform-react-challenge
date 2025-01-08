describe("Cat App E2E Tests", () => {
  describe("Home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("renders the homepage", () => {
      cy.get('[data-testid="cat-item"]').should("exist"); // Check for at least one cat item
    });

    it("allows favoriting and unfavoriting a cat when click the respective icons", () => {
      cy.get('[data-testid="cat-item"]').first().as("firstCat");
      cy.get("@firstCat")
        .trigger("mouseover")
        .find('[data-testid="cat-item-toggle-favorite-button"]')
        .click();
      cy.get("@firstCat")
        .find('[data-testid="favorite-icon-solid"]')
        .should("exist");

      cy.get("@firstCat")
        .find('[data-testid="cat-item-toggle-favorite-button"]')
        .click();
      cy.get("@firstCat")
        .find('[data-testid="favorite-icon-solid"]')
        .should("not.exist");
    });

    it("opens the cat details modal when clicks the info icon", () => {
      cy.get('[data-testid="cat-item"]').first().as("firstCat");
      cy.get("@firstCat")
        .trigger("mouseover")
        .find('[data-testid="cat-item-details-button"]')
        .click();

      cy.get('[data-testid="cat-details-modal-content"]').should("be.visible"); // Modal should appear
    });

    it("navigates to the breed list view when clicks the explore button of cat details modal", () => {
      cy.get('[data-testid="cat-item"]').first().as("firstCat");
      cy.get("@firstCat")
        .trigger("mouseover")
        .find('[data-testid="cat-item-details-button"]')
        .click();

      cy.get('[data-testid="cat-details-modal-content"]')
        .find('[data-testid="explore-breeds-button"]')
        .click();

      cy.get('[data-testid="breeds-list"]').should("exist");
    });
  });

  describe("Breeds list page", () => {
    beforeEach(() => {
      cy.visit("/breeds");
    });

    it("renders the breeds list page", () => {
      cy.get('[data-testid="breeds-list"]').should("exist");
      cy.get('[data-testid="breed-item"]').should("exist");
    });

    it("opens breed cats modal when clicks the view cats button of each breed card", () => {
      cy.get('[data-testid="breed-item"]').first().as("firstBreed");
      cy.get("@firstBreed")
        .find('[data-testid="view-breed-cats-button"]')
        .click();

      cy.get('[data-testid="breed-cats-modal-content"]').should("exist");

      cy.get('[data-testid="cat-item"]').should("exist");
    });

    it("navigates to the cat details modal when clicks to view cat details from breed cats modal", () => {
      cy.get('[data-testid="breed-item"]').first().as("firstBreed");
      cy.get("@firstBreed")
        .find('[data-testid="view-breed-cats-button"]')
        .click();

      cy.get('[data-testid="breed-cats-modal-content"]').should("exist");

      cy.get('[data-testid="cat-item"]').should("exist");

      cy.get('[data-testid="cat-item"]')
        .first()
        .trigger("mouseover")
        .find('[data-testid="cat-item-details-button"]')
        .click();

      cy.get('[data-testid="cat-details-modal-content"]').should("be.visible");
    });
  });

  describe("Favorites page", () => {
    beforeEach(() => {
      cy.visit("/favourites");
    });

    it("renders the favorite cats page", () => {
      cy.get('[data-testid="favourite-cats-list"]').should("exist");
      cy.get('[data-testid="cat-item"]').should("exist");
    });

    it("removes a favorite cat when clicks the favorite icon", () => {
      cy.get('[data-testid="cat-item"]').then((cards) => {
        const count = cards.length;

        cy.get('[data-testid="cat-item"]').first().as("firstCat");
        cy.get("@firstCat")
          .trigger("mouseover")
          .find('[data-testid="cat-item-toggle-favorite-button"]')
          .click();

        cy.get('[data-testid="cat-item"]').should("have.length", count - 1);
      });
    });
  });
});
