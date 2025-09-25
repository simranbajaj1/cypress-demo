class Dashboard {
  
  getManagedApplicationsCount() {
    return cy.get(':nth-child(1) > .styles_cardDetailWrapper__C6Pn0 > .style_variant-h1__83L2w')
  }
  

  clickManagedApplicationsCard() {
    cy.get('p').contains('Managed Applications').click( {force: true});
    //cy.contains('Managed Applications').click(); 
  }
}

module.exports = Dashboard;
