import LoginPage from "../../pages/LoginPage";
import RegisterUser from "../login/registerUser.cy"
describe("Fluxo para testar o login", () => {
  let loginData;

  beforeEach(() => {
    cy.fixture("login").then((data) => {
      loginData = data;
    });
  });

  it("ADOPET-16 - Validar fluxo com uma conta já cadastrada", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    LoginPage.validationSuccess();
  });

  it("ADOPET-17 - Validar fluxo com uma conta não cadastrada", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.incorrectEmail.email);
    LoginPage.clickPasswordLogin(loginData.incorrectEmail.password);
    LoginPage.clickEnterLogin();
    LoginPage.ValidationErrorLogin();
  });

  it("ADOPET-18 - Validar fluxo com Email em branco", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEnterLogin();
    LoginPage.ValidationEmail();
  });

  it("ADOPET-19 - Validar fluxo com senha em branco", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickEnterLogin();
    LoginPage.ValidationErrorLogin();
  });

  it("ADOPET-20 - Validar login com e-mail em formato inválido", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.emailInvalid.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    LoginPage.ValidationErrorLogin();
  });

  it("ADOPET-22 - Validar comportamento após 3 tentativas falhas de login", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.emailInvalid.email);
    LoginPage.clickPasswordLogin(loginData.incorrectEmail.password);
    LoginPage.clickEnterLogin();
    LoginPage.clickEmailLogin(loginData.incorrectEmail.email);
    LoginPage.clickPasswordLogin(loginData.incorrectEmail.password);
    LoginPage.clickEnterLogin();
    LoginPage.clickEmailLogin(loginData.incorrectEmail.email);
    LoginPage.clickPasswordLogin(loginData.incorrectEmail.password);
    LoginPage.clickEnterLogin();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    LoginPage.validationSuccess();
  });
});
