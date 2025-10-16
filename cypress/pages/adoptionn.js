class adoptionPage {
  clickCat() {
    cy.get("div.card")
      .eq(5) 
      .find("a.card__contact") 
      .click(); 
  }
}

export default new adoptionPage();
