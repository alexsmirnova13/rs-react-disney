/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
});
afterEach(() => {
  cy.window().trigger('unload');
});
describe('Just visit e2e test', () => {
  it('should visit', () => {
    cy.get('input').should('have.value', '');
  });
  it('sdfsd', () => {
    expect(true).to.equal(true);
  });
  it('should navigate to the about page', () => {
    cy.get('a[href="/about"]').click();
    cy.url().should('include', '/about');
    cy.get('h1').should(
      'contain.text',
      'Представьте, что вы понимаете, about что тут будет рассказано :D'
    );
  });
  it('page form', () => {
    cy.get('a[href="/form"]').click();
    cy.url().should('include', '/form');
    cy.get('h1').should('contain.text', 'Make a new anime');
  });

  it('page 404', () => {
    cy.visit('/invalid-url');
    cy.get('p').should('contain.text', 'Страница не найдена.');
  });
});
