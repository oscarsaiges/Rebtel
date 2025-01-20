import './commands'

declare global {
    namespace Cypress {
        interface Chainable {

        /**
         * Custom command to find given input field in a form.
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
         * Custom command to submit form
         * @example cy.submitForm()
         */
            submitForm(): Chainable<JQuery<HTMLElement>>
            
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