describe ('sat api', () => {
  it ('should return the correct data', () => {
    cy.visit ('https://consultaqr.facturaelectronica.sat.gob.mx/ConsultaCFDIService.svc');
    cy.intercept({
      method: 'POST',
      url: 'https://consultaqr.facturaelectronica.sat.gob.mx/ConsultaCFDIService.svc',
      response: 'fixture:apiSAT.xml',
      status: 200,
      delay: 1000,
    })
  }).timeout (10000);
}
);