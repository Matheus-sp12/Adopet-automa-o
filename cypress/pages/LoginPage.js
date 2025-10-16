class LoginPage {
  visit() {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
  }

  clickLoginHome() {
    cy.get('[data-test="login-button"]').click();
  }

  clickEmailLogin(email) {
    cy.get('[data-test="input-loginEmail"]')
      .clear()
      .type(email);
  }

  clickPasswordLogin() {
    cy.get('[data-test="input-loginPassword"]').clear().type("Teste1234");
  }

  clickEnterLogin() {
    cy.get('[data-test="submit-button"]').click();
  }

  validationSuccess() {
    cy.get(".home").should("be.visible");
  }

  ValidationErrorLogin() {
    cy.get('.error').should("be.visible");
  }

  ValidationEmail() {
    cy.get('form > :nth-child(3)').should("be.visible");
  }



  
}
export default new LoginPage();
