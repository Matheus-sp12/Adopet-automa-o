import LoginPage from "../../pages/LoginPage";

import RegisterUser from "../../pages/RegisterUse";
import EmailPage from "../../pages/emailSending";

describe("Fluxo para testar o envio de email", () => {
  let loginData;

  beforeEach(() => {
    cy.fixture("login").then((data) => {
      loginData = data;
    });
  });

  it("ADOPET-23 - Validar fluxo com de sucesso", () => {
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

  it("ADOPET-24 - Validar fluxo com numeros no campo de nome", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.nameNumber);
    EmailPage.clickNumber(loginData.sendEmail.inputNumber);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
    LoginPage.validationSuccess();
  });

  it("ADOPET-25 - Validar fluxo com caracteres especiais no campo de nome", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.caracterSpecial);
    EmailPage.clickNumber(loginData.sendEmail.inputNumber);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
    LoginPage.validationSuccess();
  });

  it("ADOPET-26 - Validar fluxo com campo nome em branco", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickNumber(loginData.sendEmail.inputNumber);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
    LoginPage.ValidationErrorLogin();
  });

  it("ADOPET-27 - Validar fluxo inserindo letras no campo de telefone", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.names);
    EmailPage.clickNumber(loginData.sendEmail.phone);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
    LoginPage.ValidationErrorLogin();
  });

  it("ADOPET-28 - Validar fluxo inserindo caracteres especiais no campo de telefone", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.names);
    EmailPage.clickNumber(loginData.sendEmail.caracterSpecial);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
    LoginPage.ValidationErrorLogin();
  });

  it("ADOPET-29 - Validar fluxo inserindo menos de 9 números no campo telefone", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.names);
    EmailPage.clickNumber(loginData.sendEmail.minNumber);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
    LoginPage.ValidationErrorLogin();
  });

  it("ADOPET-30 - Validar fluxo inserindo mais que 9 números no campo telefone", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.names);
    EmailPage.clickNumber(loginData.sendEmail.maxNumber);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
  });

  it("ADOPET-31 - Validar fluxo com campo telefone em branco", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.names);
    EmailPage.clickNamePet();
    EmailPage.clickmessage();
    EmailPage.clickEnter();
    LoginPage.ValidationErrorLogin();
  });

  it("ADOPET-32 - Validar fluxo com campo Nome do animal em branco", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.names);
    EmailPage.clickNumber(loginData.sendEmail.inputNumber);
    EmailPage.clickmessage();
  });

  it("ADOPET-33 - Validar fluxo com campo Mensagem em branco", () => {
    LoginPage.visit();
    LoginPage.clickLoginHome();
    LoginPage.clickEmailLogin(loginData.login.email);
    LoginPage.clickPasswordLogin(loginData.login.password);
    LoginPage.clickEnterLogin();
    EmailPage.clickEmaill();
    EmailPage.clickInputName(loginData.sendEmail.names);
    EmailPage.clickNumber(loginData.sendEmail.inputNumber);
    EmailPage.clickNamePet();
  });
});
