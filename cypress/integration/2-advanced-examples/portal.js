describe('Login', () => {
    it('Login through Google', () => {

        const socialLoginOptions = {

            username: 'rohinit@geekyants.com',
            password: 'Rohini@123',
            loginUrl: 'http://geekyants-login.geekydev.com/#',
            headless: false,
            loginSelector: '.custom-btn',
            postLoginSelector: '.m-b',
            logs: true,
            isPopup: false,

        }

        return cy.task('GoogleSocialLogin', socialLoginOptions).then(({ cookies }) => {
            cy.clearCookies()
            const cookie = cookies.filter(cookie => cookie.name === 'geekyants_session').pop()
      if (cookie) {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expires,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure
        })

        Cypress.Cookies.defaults({
          preserve: 'geekyants_session'
        })
        cy.contains('button','Login').click({ force:true })
        cy.contains("a[href='https://em.geekyants.com/']").click({ force:true })
        
      }
    })
  })
})
