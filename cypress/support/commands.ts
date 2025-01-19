// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import customer from '../fixtures/customer.json'
import fields from '../fixtures/fields.json'
import bankUrl from '../fixtures/bankUrl.json'

Cypress.Commands.add('fillInput', (placeholder, value) => {
    cy.get(`input[placeholder*="${placeholder}"]`)
    .should('have.value', '')
    .type(value)
    .should('have.value', value)
})

Cypress.Commands.add('assertInTable', (value) => {
    cy.get('td').contains(value).should('be.visible')
})

Cypress.Commands.add('createCustomer', () => {

    // Visit site and navigate to bank manager page
    cy.visit(bankUrl.home)
    cy.get('button').contains('Bank Manager Login').click()

    // Navigate to add customer page
    cy.get('button').contains('Add Customer').click()
    
    // Fill form
    cy.fillInput(fields.firstName, customer.firstName)
    cy.fillInput(fields.lastName, customer.lastName)
    cy.fillInput(fields.postCode, customer.postCode)

    // Submit form
    cy.get('form').submit()

    // Visit home
    cy.get('button').contains('Home').click()
})

Cypress.Commands.add('createCustomerAccount', () => {

    // Visite bank manager page
    cy.get('button').contains('Bank Manager Login').click()
    
    // Navigate to open customer account page
    cy.get('button').contains('Open Account').click()

    // Select customer and currency
    cy.get('#userSelect').select(`${customer.firstName} ${customer.lastName}`)
    cy.get('#currency').select(2)

    // Submit form
    cy.get('form[name*=myForm]').submit()

    // Visit home
    cy.get('button').contains('Home').click()
})