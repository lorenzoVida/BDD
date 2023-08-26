import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

//const url = 'https://uat.v2.certificadotradicionylibertad.com/'
Given('abrir la website de snr', () => {
  cy.visit('c/')
  cy.wait(4000)
})

When('agrego varios certificados para su consulta', () => {
  cy.get('#office-list').type('xx').type('{downarrow}{enter}')
  cy.get('input[placeholder="Ingrese la matrícula"]').type('4565')
  cy.get('button[aria-label="Debes llenar los campos para realizar la consulta"]').click()
  cy.wait(10000)
  cy.get('.MuiButton-text').click()
  //ACACIAS BARICHARA
  cy.get('#office-list').type('xxx').type('{downarrow}{enter}')
  cy.get('input[placeholder="Ingrese la matrícula"]').type('4654')
  cy.get('button[aria-label="Debes llenar los campos para realizar la consulta"]').click()
  cy.wait(2000)
  cy.get('#office-list').type('xxx').type('{downarrow}{enter}')
  cy.get('input[placeholder="Ingrese la matrícula"]').type('4633')
  cy.get('button[aria-label="Debes llenar los campos para realizar la consulta"]').click()
  cy.wait(6000)
  cy.get('#office-list').type('xx').type('{downarrow}{enter}')
  cy.get('input[placeholder="Ingrese la matrícula"]').type('4333')
  cy.get('button[aria-label="Debes llenar los campos para realizar la consulta"]').click()
  ////repetidos
  cy.wait(10000)
  cy.get('#office-list').type('x x x').type('{downarrow}{enter}')
  cy.get('input[placeholder="Ingrese la matrícula"]').type('4512')
  cy.get('button[aria-label="Debes llenar los campos para realizar la consulta"]').click()
  //ACACIAS BARICHARA
  cy.get('#office-list').type('xxx').type('{downarrow}{enter}')
  cy.get('input[placeholder="Ingrese la matrícula"]').type('4698')
  cy.get('button[aria-label="Debes llenar los campos para realizar la consulta"]').click()
  cy.wait(6000)
  cy.get('#office-list').type('xx').type('{downarrow}{enter}')
  cy.get('input[placeholder="Ingrese la matrícula"]').type('4612')
  cy.get('button[aria-label="Debes llenar los campos para realizar la consulta"]').click()
  cy.wait(6000)
  cy.get('.css-s8setv > .MuiButton-root').click()
  })

And('ingreso los datos del medio de pago', () => {
  //completar medio de pago
  //capturar el monto total de compra
  //var totalCompra=cy.get('.css-1i0rzyv').find().text()
  cy.get('#mui-component-select-bank').click()
  cy.get('li:nth-child(2)').click()
  //tipo de persona
  cy.get('#mui-component-select-kindOfPerson').click()
  cy.get('li:nth-child(1)').click()
  cy.get('input[name="email"]').type('prubeatestrockfeller@gmail.com')
  cy.get('.MuiCheckbox-root > .PrivateSwitchBase-input').click()
  cy.get('.css-uqj0co > .MuiButton-containedPrimary').click()
})

And('ingreso los datos de facturacion', () => {
   //completar datos de facturacion
   cy.get('input[name="email"]').type('prubeatestrockfeller@gmail.com')
   cy.get('input[name="name"]').type('Robert Nesta Marley')
   //seleccionar tipo de docuemnto
   cy.get('#mui-component-select-documentType').click()
   cy.get('li:nth-child(2)').click()
   cy.get('div[aria-label="El número NIT se debe ingresar sin el dígito de verificación"] input[type="text"]').type('123456789')
   cy.get('input[name="address"]').type('Av. Bolognesi 740, Referencia parque de Barránco')
   cy.get(':nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').type('Antioquia').type('{downarrow}{enter}')
   cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').type('{downarrow}{enter}')
   cy.get('.css-uqj0co > .MuiButton-containedPrimary').click()
})

And('validar informacion de la transaccion a pagar', () => {
  cy.wait(25000)
  cy.get('.button.btn--primary').click()
})

And('validar informacion del resumen de la compra', () => {
  cy.wait(30000)
  cy.get('.css-sro9zg > .MuiButton-containedPrimary').click()
  
})

Then('descargar certificados comprados', () => {
  cy.get('.MuiButton-containedSecondary').click()
})
