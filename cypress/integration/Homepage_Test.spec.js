import LandingPage from "../pageobjects/LandingPage";
import LoginPage from "../pageobjects/LoginPage";

describe("Verify Login Functionality", function () {
  it("Should able to launch login page", function () {
    const Hp = new LandingPage();
    Hp.visit();
  });

  it("User should be able to see dashboard when login with valid credentials", function () {
    const Lp = new LoginPage();
    Lp.fillEmail("Admin");
    Lp.fillPassword("admin123");
    Lp.clickSignIn();
    cy.title().should("be.equal", "OrangeHRM");
  });
});
