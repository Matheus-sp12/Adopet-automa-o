import LoginPage from "../../pages/LoginPage";

import RegisterUser from "../../pages/RegisterUse";
import EmailPage from "../../pages/emailSending";
import adoptionPage from "../../pages/adoptionn";

describe("Fluxo para testar a adoção", () => {
  let loginData;

  beforeEach(() => {
    cy.fixture("login").then((data) => {
      loginData = data;
    });
  });

  it("ADOPET- 34 -Validar fluxo de adoção de um cachorro", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.names);
    EmailPage.clickNumber(loginData.sendEmail.inputNumber);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
    LoginPage.validationSuccess();
  });

  it("ADOPET-35 - Validar fluxo de adoção de um Gato", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    adoptionPage.clickCat();
    EmailPage.clickInputName(loginData.sendEmail.names);
    EmailPage.clickNumber(loginData.sendEmail.inputNumber);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
    LoginPage.validationSuccess();
  });


});
