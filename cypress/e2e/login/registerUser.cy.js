import LoginPage from "../../pages/LoginPage";
import RegisterUser from "../../pages/RegisterUse";

describe("Fluxo para testar o login", () => {
  let loginData;

  beforeEach(() => {
    cy.fixture("login").then((data) => {
      loginData = data;
    });
  });

  it("ADOPET-3 - Validar cadastro com todos os campos preenchidos corretamente", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });

  it("ADOPET- 4 - Validar cadastro com nome vazio", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.validateSucesso();
  });

  it("ADOPET- 5 - Validar cadastro com caracteres especiais no campo nome", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName(loginData.caracterName.name);
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });

  it("ADOPET- 6 - Validar cadastro com nome muito longo (mais de 100 caracteres). ", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.maximumCharacter();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.validateSucesso();
;
  });

  it("ADOPET- 7 - Validar cadastro com nome contendo apenas um caractere.", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });

  it("ADOPET- 8 - Validar cadastro com e-mail em formato inválido", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });

  it("ADOPET- 10 - Validar cadastro com e-mail já existente (duplicidade).", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });

  it("ADOPET- 11 - Validar cadastro com e-mail contendo caracteres especiais válidos", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });

  it("ADOPET- 12 - Validar cadastro com senha menor que 6 caracteres.", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });

  it("ADOPET- 13 - Validar cadastro com senha muito longa (ex: > 50 caracteres).", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });

  it("ADOPET- 14 - Validar cadastro com senha e confirmação diferentes.", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });

  it("ADOPET- 15 - Validar cadastro com senha contendo apenas números.", () => {
    LoginPage.visit();
    RegisterUser.clickRegisterHome();
    RegisterUser.inputName();
    RegisterUser.inputEmail();
    RegisterUser.inputPassword();
    RegisterUser.confirmaInputPassword();
    RegisterUser.buttonRegister();
    RegisterUser.confirmSucess();
  });
});
