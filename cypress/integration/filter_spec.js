// / <reference types="Cypress" />

context('Filters', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('it should find filter by name', () => {
    cy.get('#filters #name')
      .should('be.empty')
      .click();
  });

  it('it should find filter by city', () => {
    cy.get('#filters #city')
      .should('be.empty')
      .click();
  });

  it('it should show all members in container', () => {
    cy.get('.App-container')
      .find('.CrewMember-container')
      .should('have.length', 5);
  });

  it('it should show only one user when search by name lloyd ', () => {
    cy.get('#filters #name').type('lloyd');
    cy.get('#filters [type=\'submit\']').click();
    cy.get('.App-container')
      .find('.App-column')
      .first().should('contain', 'lloyd');
  });

  it('it should show only one user when search by city liverpool ', () => {
    cy.get('#filters #city').type('liverpool');
    cy.get('#filters [type=\'submit\']').click();
    cy.get('.App-container')
      .find('.App-column')
      .first().should('contain', 'liverpool');
  });

  it('it should not show anything when incorrect value is entered in Name input', () => {
    cy.get('#filters #name').type('123456');
    cy.get('#filters [type=\'submit\']').click();
    cy.get('.App-container')
      .find('.CrewMember-container')
      .should('have.length', 0);
  });

  it('it should not show anything when incorrect value is entered in City input', () => {
    cy.get('#filters #city').type('123456');
    cy.get('#filters [type=\'submit\']').click();
    cy.get('.App-container')
      .find('.CrewMember-container')
      .should('have.length', 0);
  });

  it('it should not show users after search, but show them after Clear btn click', () => {
    cy.get('#filters #city' ).type('123456');
    cy.get('#filters [type=\'submit\']').click();
    cy.get('.App-container')
      .find('.CrewMember-container')
      .should('have.length', 0);
    cy.get('#filters [type=\'button\']').click();
    cy.get('.App-container')
      .find('.CrewMember-container')
      .should('have.length', 5);
  });


});

