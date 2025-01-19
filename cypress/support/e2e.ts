// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

declare global {
    namespace Cypress {
        interface Chainable {

        /**
         * Custom command to find a input field in a form.
         * Searching for corresponding placeholder and then insert text.
         * @example cy.findInput('City', 'Uppsala')
         */
        fillInput(placeholder: string, value: string): Chainable<JQuery<HTMLElement>>

        /**
         * Custom command to assert a given value is in a table
         * @example cy.assertInTable('Albert')
         */
        assertInTable(value: string): Chainable<JQuery<HTMLElement>>

        /**
         * Custom command that creates a customer
         * @example cy.createCustomer()
         */
        createCustomer(): Chainable<JQuery<HTMLElement>>
            
        /**
         * Custom command that adds an account to an existing customer
         * @example cy.createCustomer()
         */
        createCustomerAccount(): Chainable<JQuery<HTMLElement>>
            
        }
    }
}