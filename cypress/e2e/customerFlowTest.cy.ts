import customer from '../fixtures/customer.json'

describe('Customer flow - ', () => {

    beforeEach(() => {
        cy.createCustomer()
        cy.createCustomerAccount()

        // Customer login
        cy.get('button').contains('Customer Login').click()

        // Select customer
        cy.get('#userSelect').select(`${customer.firstName} ${customer.lastName}`)

        // Submit form
        cy.get('form[name*=myForm]').submit()
    })

    it('Login as customer', () => {

        // Assert customer data is correct
        cy.get('strong').contains(`Welcome ${customer.firstName} ${customer.lastName}`)
        cy.get('strong').contains(customer.accountNumber)
        cy.get('strong').contains('0')
        cy.get('strong').contains(customer.currency.pound)

        cy.get('button').contains('Transactions').should('be.visible').and('not.be.disabled')
        cy.get('button').contains('Deposit').should('be.visible').and('not.be.disabled')
        cy.get('button').contains('Withdrawl').should('be.visible').and('not.be.disabled')

    })

    it.only('Customer transaction validation', () => {

        // Make a deposit
        cy.get('button').contains('Deposit').click()
        cy.fillInput('amount', '1337')
        // Submit form
        cy.get('form[name*=myForm]').submit()

        // Assert deposit
        cy.get('strong').contains('1337')
        cy.get('span').contains('Deposit Successful')

        // var localStorageData: any = window.localStorage.getItem('Transaction')
        // cy.wrap(localStorageData).then((data) => {console.log(data)})
        // console.log(localStorageData["1"])


        cy.getAllLocalStorage().then((localStorageData) => {
            expect(localStorageData).to.have.property('https://globalsqa.com')


            Object.values(localStorageData).forEach(values => {
                // console.log(values.Transaction)
                const transactionObject = values.Transaction

                Object.keys(transactionObject).forEach(account => {
                    console.log(account)
                })
                // console.log(transactionObject[1])
                // const sixObject = transactionObject['6'];
                // const lastTransaction = sixObject[sixObject.length - 1];

                // console.log(lastTransaction)

            })
            // expect(localStorageData).to.deep.equal({
            //     'https://globalsqa.com': {

            //     }
            // })


            // const data = JSON.parse(localStorageData)
            // console.log('KANIN data', localStorageData[3])
            // cy.wrap(localStorageData).then((data) => {
            //     // expect(data).to.have.property('Transaction')
            //     console.log('KANIN', data)
            // })
            // expect(localStorageData.https://globalsqa.com).to.be.a('string').and.not.be.empty

            // expect(localStorageData.Transaction).to.contain('1337')
        })





    })
})