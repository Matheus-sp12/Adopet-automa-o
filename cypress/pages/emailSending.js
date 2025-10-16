class EmailPage {
  clickEmaill() {
    cy.get("#root div:nth-child(2) > a.card__contact").click();
  }

  clickInputName(namerInput) {
    cy.get('[name="name"]').click().type(namerInput);;
  }

  clickNumber(numberPhone) {
    cy.get('[name="phone"]').click().type(numberPhone);
  }

  clickNamePet() {
    cy.get('[name="petName"]').click().type("Dog Maycon");;
  }

    clickmessage() {
    cy.get('[name="msg"]').click().type("Gostaria de adotar o animal dog maycon");;
  }

clickEnter() {
  cy.get('[data-test="submit-button"]').click();
}


  
}

export default new EmailPage();
