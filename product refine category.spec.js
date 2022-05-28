/// <reference types="cypress" />

describe('Product category', () => {
    beforeEach(() => {
        cy.visit("https://www.amazon.co.uk/ref=nav_logo")
    })
    it("should display product category drop down", () =>{
        /// checking all option and search bar working
        
        cy.get('#searchDropdownBox').select('All Departments', { force: true }).should('have.value','search-alias=aps')
        cy.get('#nav-search-submit-button').click()
        cy.get('#twotabsearchtextbox').type('Iphone 12 pro 256 GB {enter}')
      


})
it("should display product category drop down", () =>{
    /// checking Alexa skills and search bar working
        cy.get('#searchDropdownBox').select('Alexa Skills', { force: true }).should('have.value','search-alias=alexa-skills')
        cy.get('#nav-search-submit-button').click()
        cy.get('#twotabsearchtextbox').type('Alexa {enter}')

})
it("should display product category drop down", () =>{
    /// checking Amazon Devices and search bar working
        cy.get('#searchDropdownBox').select('Amazon Devices', { force: true }).should('have.value','search-alias=amazon-devices')
        cy.get('#nav-search-submit-button').click()
        cy.get('#twotabsearchtextbox').type('echo dot {enter}')

})


it("should display product category drop down", () =>{
    /// checking Amazon Global Store and search bar working
        cy.get('#searchDropdownBox').select('Amazon Global Store', { force: true }).should('have.value','search-alias=amazon-global-store')
        cy.get('#nav-search-submit-button').click()
        cy.get('#twotabsearchtextbox').type('PS4 {enter}')

})

it("should display product category drop down", () =>{
    /// checking Amazon WareHouse and search bar working
        cy.get('#searchDropdownBox').select('Amazon Warehouse', { force: true }).should('have.value','search-alias=warehouse-deals')
        cy.get('#nav-search-submit-button').click()
        cy.get('#twotabsearchtextbox').type('hp laptop {enter}')

})

})


