/// <reference types="cypress" />

export class BasePage {

    goToBaseUrl() {
        cy.visit('https://angular-qa-recruitment-app.netlify.app/');
        return this;
    };

    goToInvalidUrl() {
        cy.visit('https://angular-qa-recruitment-app.netlify.app/test123');
        cy.url()
        .then((url) => {
            expect(url).to.equal('https://angular-qa-recruitment-app.netlify.app/');
        })
        return this;
    };

    goToWelcomeTab() {
        cy.get('#main-view-link')
          .contains('Welcome')
          .click();
          return this;
    };

    goToFormTab() {
        cy.get('#form-view-link')
          .contains('Form')
          .click();
          return this;
    };

    goToStepperTab() {
        cy.get('#stepper-view-link')
          .contains('Stepper')
          .click();
          return this;
    };
}