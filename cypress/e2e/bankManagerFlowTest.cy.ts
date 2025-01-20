import customer from '../fixtures/customer.json'
import buttons from '../fixtures/buttons.json'

describe('XYZ Bank, ', () => {

    beforeEach(() => {
        cy.createCustomer()
    })

    describe('Bank Manager Workflow - ', () => {
        it('Assert customer have been added', () => {

            // Visite bank manager page
            cy.get('button').contains(buttons.bankManagerLogin).click()

            // Navigate to Customers table
            cy.get('button').contains(buttons.customers).click()

            // Assert customer is visible in table
            cy.assertInTable(customer.firstName)
            cy.assertInTable(customer.lastName)
            cy.assertInTable(customer.postCode)

        })

        it('Open a customer account', () => {

            // Create customer account
            cy.createCustomerAccount()

            // Visite bank manager page
            cy.get('button').contains(buttons.bankManagerLogin).click()

            // Navigate to customers page
            cy.get('button').contains(buttons.customers).click()

            // Assert new account is visible in table
            cy.get('table tbody tr').last().find('td span').last().should('not.be.empty').and('contain', customer.accountNumber)

        })
    })
})