class Application {
  
  getApplicationsCount() {

    return cy.get('.style_typography__iN6Ax').contains(30);
  }
}

module.exports = Application;
