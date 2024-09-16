describe("Onboading App", () => {
  beforeEach(() => {
    // Before each test, we need fresh state
    // This means we don't want any state when a new test runs
    cy.visit("http://localhost:3000");
  });

  it("Sanity check", () => {});

  //   Getters
  const firstNameInput = () => cy.get("input[name=first_name]");
  const lastNameInput = () => cy.get("input[name=last_name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const agreeToTOSInput = () => cy.get("input[name=agreeToTOS]");

  const submitFormButton = () => cy.get(`button[id='join-button']`);

  describe("Inputs exist and are editable", () => {
    it("First name, Last name, Email, and Password inputs exist. The terms of service checkbox exists", () => {
      firstNameInput().should("exist");
      lastNameInput().should("exist");
      emailInput().should("exist");
      passwordInput().should("exist");
      agreeToTOSInput().should("exist");
    });

    it("First name, Last name, Email, and Password Inputs accept a typed value", () => {
      firstNameInput()
        .should("have.value", "")
        .type("Erik")
        .should("have.value", "Erik");

      lastNameInput()
        .should("have.value", "")
        .type("Bahena")
        .should("have.value", "Bahena");

      emailInput()
        .should("have.value", "")
        .type("erik@gmail.com")
        .should("have.value", "erik@gmail.com");

      passwordInput()
        .should("have.value", "")
        .type("FakePassword")
        .should("have.value", "FakePassword");
    });

    it("The checkbox can be checked and starts off unchecked", () => {
      agreeToTOSInput().should("not.be.checked").check().should("be.checked");
    });
  });

  describe("The user can submit the form", () => {
    it("the button with an id='join-button' exists", () => {
      submitFormButton().should("exist");
    });

    it("If any part of the form is blank or invalid, the button is disabled", () => {
      submitFormButton().should("be.disabled");
    });

    it("If the form is filled out properly the submit button should be enabled", () => {
      firstNameInput().type("Erik");
      lastNameInput().type("Bahena");
      emailInput().type("erik@gmail.com");
      passwordInput().type("FakePassword");
      agreeToTOSInput().check();
      submitFormButton().should("not.be.disabled");
    });

    it("clicking the button with all valid form fields should create a new element in the dom containing the first and last name, along with the email", () => {
      firstNameInput().type("Erik");
      lastNameInput().type("Bahena");
      emailInput().type("erik@gmail.com");
      passwordInput().type("FakePassword");
      agreeToTOSInput().check();
      submitFormButton().click();
      const newElement = () =>
        cy.get(".team-members-container div:nth-of-type(1)");

      newElement().should("include.text", "Erik");
      newElement().should("include.text", "Bahena");
      newElement().should("include.text", "erik@gmail.com");
    });
  });
});
