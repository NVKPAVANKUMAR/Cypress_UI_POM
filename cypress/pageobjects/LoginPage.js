class LoginPage {
  fillEmail(value) {
    const emailAdress = cy.get("input[name='username']");
    emailAdress.clear();
    emailAdress.type(value);
    return this;
  }

  fillPassword(value) {
    const Password = cy.get("input[name='password']");
    Password.clear();
    Password.type(value);
    return this;
  }

  clickSignIn() {
    const Signinbtn = cy.get("button[type='submit']");
    Signinbtn.click();
    return this;
  }
}
export default LoginPage;
