class RegisterUser {
  clickRegisterHome() {
    cy.get('[data-test="register-button"]').click();
  }

  inputName() {
    cy.get('[data-test="input-name"]').clear().type("luis da silva");
  }

  inputEmail() {
    const randomEmail = `usuario_${Date.now()}@teste.com`;
    cy.get('[data-test="input-email"]').type(randomEmail);
    cy.log("Email usado:", randomEmail);
  }

  inputPassword() {
    cy.get('[data-test="input-password"]').clear().type("Teste1234");
  }

  confirmaInputPassword() {
    cy.get('[data-test="input-confirm-password"]').clear().type("Teste1234");
  }

  buttonRegister() {
    cy.get('[data-test="submit-button"]').click();
  }

  confirmSucess() {
    cy.get('[data-test="link-cadastro"]').should("exist");
  }

  validateSucesso() {
    cy.get('[data-test="link-cadastro"]').should("not.exist");
  }

  maximumCharacter() {
    cy.get('[data-test="input-name"]').type('A'.repeat(101));
  }
  
}

export default new RegisterUser();
