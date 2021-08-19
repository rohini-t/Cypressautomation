

describe('Suite', function()
{
    it('LoginTest',function()
{
    cy.visit('https://login.geekyants.com/')
    cy.get('.custom-btn').click()
})
})