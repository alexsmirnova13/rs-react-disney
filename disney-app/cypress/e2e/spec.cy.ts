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

describe('Card modal', () => {
  it('should open modal on card click', () => {
    cy.visit('/');
    cy.get('.card').first().click();
    cy.get('.modal').should('be.visible');
  });
});

describe('Form', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should show error messages for empty required fields', () => {
    cy.get('.button').click();
    cy.get('.error').should('contain', 'Field is required');
  });

  it('should show error message for invalid name', () => {
    cy.get('.input-name').type('A');
    cy.get('.button').click();
    cy.get('.error').should('contain', 'min length is 3');
  });

  it('should show error message for unchecked checkbox', () => {
    cy.get('#select-input').select('English');
    cy.get('.button').click();
    cy.get('.error').should('contain', 'Field is required');
  });
});
