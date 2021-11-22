describe('My First Test', () => {
  it('Does not do much!', () => {
   // cy.visit('https://d2y49sh96s5xvm.cloudfront.net/')
    cy.visit('https://uat.v2.certificadotradicionylibertad.com/')
   //cy.visit('https://d3csk571mpedte.cloudfront.net/')
   // produccion https://www.certificadotradicionylibertad.com/
   //cy.visit('https://www.certificadotradicionylibertad.com/')
    cy.wait(4000)
    //cy.get('#office-list').click()
    cy.get('#office-list').type('AGUA DE DIOS').type('{downarrow}{enter}')
    cy.get('input[placeholder="Ingrese la matrícula"]').type('4565')
    cy.get('button[aria-label="Debes llenar los campos para realizar la consulta"]').click()
    cy.wait(4000)
    //cy.get('div[class="MuiBox-root css-bu8jbl"] div[class*=MuiBox-root]').should('have.length',1)
    //cy.get('div[class="MuiBox-root css-bu8jbl"] div[class*=MuiBox-root]').eq(1).contains('AGUA DE DIOS')
    cy.get('.css-s8setv > .MuiButton-contained').click()
    //capturando el monto total de la compra
    cy.get('p[class="MuiTypography-root MuiTypography-body1 css-1i0rzyv"]').then(function(montoTotalCompra)
    {
      cy.log(montoTotalCompra.text())
    })
    //ingresando la tarjeta
    cy.get('#btnOpenModal').click()
    cy.get('img[alt="Close modal icon"]').click()
    cy.get('input[value="card"]').click()
    /*
    
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
    //muestra el sandbox
    cy.wait(25000)
    cy.get('.button.btn--primary').click()
    cy.wait(25000)
    cy.get('.css-sro9zg > .MuiButton-containedPrimary').click()
    cy.get('.MuiButton-containedSecondary').click()
    */
  })
})