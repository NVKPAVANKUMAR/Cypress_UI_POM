class LoginPage {
  fillEmail(value) {
    const emailAdress = cy.get("#txtUsername");
    emailAdress.clear();
    emailAdress.type(value);
    return this;
  }

  fillPassword(value) {
    const Password = cy.get("#txtPassword");
    Password.clear();
    Password.type(value);
    return this;
  }

  clickSignIn() {
    const Signinbtn = cy.get("#btnLogin");
    Signinbtn.click();
    return this;
  }
}
export default LoginPage;
