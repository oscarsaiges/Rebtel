import customer from '../fixtures/customer.json'
import buttons from '../fixtures/buttons.json'

describe('Customer flow - ', () => {

    beforeEach(() => {
        cy.createCustomer()
        cy.createCustomerAccount()

        // Customer login
        cy.get('button').contains(buttons.customerLogin).click()

        // Select customer
        cy.get('#userSelect').select(`${customer.firstName} ${customer.lastName}`)

        // Submit form
        cy.submitForm()
    })

    it('Login as customer', () => {

        // Assert customer data is correct
        cy.get('strong').contains(`Welcome ${customer.firstName} ${customer.lastName}`)
        cy.get('strong').contains(customer.accountNumber)
        cy.get('strong').contains('0')
        cy.get('strong').contains(customer.currency.pound)

        cy.get('button').contains(buttons.transaction).should('be.visible').and('not.be.disabled')
        cy.get('button').contains(buttons.deposit).should('be.visible').and('not.be.disabled')
        cy.get('button').contains(buttons.withdrawl).should('be.visible').and('not.be.disabled')

    })

    it('Customer transaction validation', () => {

        // Make a deposit
        cy.get('button').contains(buttons.deposit).click()
        cy.fillInput('amount', customer.deposit)
        // Submit form
        cy.submitForm()

        // Assert deposit
        cy.get('strong').contains(customer.deposit)
        cy.get('span').contains('Deposit Successful')

        cy.getAllLocalStorage().then((localStorageData) => {
            expect(localStorageData).to.have.property('https://globalsqa.com')

            Object.values(localStorageData).forEach(values => {
                // Extract Transaction object
                const transactionObject: any = values.Transaction

                // Extract transaction data
                const transactionData: any = JSON.parse(transactionObject)

                // Extract customer transaction
                const customerTransactionAmount: string = transactionData['6'][1016][0].amount
                expect(customerTransactionAmount).to.deep.equal(parseInt(customer.deposit))

            })
        })
    })
})