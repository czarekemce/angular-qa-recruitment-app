import '@testing-library/cypress/add-commands'
import { BasePage } from "./basePage";

export class FormPage extends BasePage {

    moveToFormPage() {
        this.goToFormTab();
        return this;
    }

    checkIfOnFormPage() {
        cy.url()
        .should('eq', 'https://angular-qa-recruitment-app.netlify.app/form')
        return this;
    }

    checkInputsInForm() {
        cy.get('#name')
        .clear()
        .siblings()
        .should('have.class', 'alert')
        .get('#alterEgo')
        .clear()
        .should('be.empty')
        .get('#power')
        .then((power) => {
            cy.wrap(power)
            .select(0).should('contain.text', 'Really Smart')
            .select(1).should('contain.text', 'Super Flexible')
            .select(2).should('contain.text', 'Super Hot')
            .select(3).should('contain.text', 'Weather Changer')
        })
        .get('button[type="submit"]')
        .contains('Submit')
        .should('be.visible')
        .get('button[type="button"]')
        .contains('New Hero')
        .should('be.visible')
        return this;
    }

    newHeroForm() {
        cy.get('button[type="button"]')
        .contains('New Hero')
        .click({ force: true})
        .then(() => {
            cy.get('#name').siblings().should('have.class', 'alert-danger')
            cy.get('#power').siblings().should('have.class', 'alert-danger')
        })
        return this;
    }

    fillTheFormAndSubmit(nameValue, alterEgoValue, powerIndexValue) {
        const powerIndex = [
            'Really Smart',
            'Super Flexible',
            'Super Hot',
            'Weather Changer'
        ];

        cy.get('#name')
        .type(nameValue)
        .get('#alterEgo')
        .type(alterEgoValue)
        .get('#power')
        .select(1)
        .get('button[type="submit"]')
        .contains('Submit')
        .click()
        .get('div')
        .then(($div) => {
            cy.get('h2').should('include.text', 'You submitted the following:')
              .wrap($div).should('include.text', nameValue)
              .wrap($div).should('include.text', alterEgoValue)
              .wrap($div).should('include.text', powerIndex[powerIndexValue])
        })
        return this;
    }

    editFormAndSubmit() {
        cy.findAllByRole('button')
          .contains('Edit')
          .click()
          .then(() => {
            this.fillTheFormAndSubmit('2', '2', 3)
          })
          return this;
    }

    shouldHaveValidationOnWhiteSpaces(nameValue, alterEgoValue) {
        cy.get('#name')
        .clear()
        .type(nameValue)
        .get('#alterEgo')
        .clear()
        .type(alterEgoValue)
        .get('#power')
        .select(1)
        .get('button[type="submit"]')
        .contains('Submit')
        .click()
        .get('div')
        .then(($div) => {
            cy.get('h2').should('include.text', 'You submitted the following:')
              .wrap($div).should('not.include.text', nameValue)
              .wrap($div).should('not.include.text', alterEgoValue)
              if ($div.text().includes(nameValue) || $div.text().includes(alterEgoValue)) {
                throw new Error('No validation for special characters')
              }
        })
    }

}
