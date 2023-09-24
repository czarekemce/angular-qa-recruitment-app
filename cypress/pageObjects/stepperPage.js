import '@testing-library/cypress/add-commands'
import { BasePage } from "./basePage";

export class StepperPage extends BasePage {

    moveToStepperPage() {
        this.goToStepperTab();
        return this;
    }

    checkIfOnStepperPage() {
        cy.url()
        .should('eq', 'https://angular-qa-recruitment-app.netlify.app/stepper')
        return this;
    }

    fillInputAndCheckNameTab(nameInputText) {
        cy.get('#cdk-step-label-0-0')
        .should('contain.text', 'Fill out your name')
        .and('have.attr', 'aria-selected', 'true')
        .get('#mat-input-0').as('name')
        .type(nameInputText)
        .get('[type="submit"]')
        .contains('Next')
        .click({ force: true})
        return this;
    }

    fillInputAndCheckAddressTab(addressInputText) {
        cy.get('#cdk-step-label-0-1')
        .should('contain.text', 'Fill out your address')
        .and('have.attr', 'aria-selected', 'true')
        .get('#mat-input-1').as('address')
        .type(addressInputText)
        .get('[type="submit"]')
        .contains('Next')
        .click({ force: true})
        return this;
    }

    checkDoneTab(nameInputText, addressInputText) {
        cy.get('#cdk-step-label-0-2')
        .should('contain.text', 'Done')
        .and('have.attr', 'aria-selected', 'true')
        .get('#cdk-step-content-0-2')
        .then(() => {
            cy.findAllByText('You are now done!')
            .get('p').contains(nameInputText).should('be.visible')
            .get('p').contains(addressInputText).should('be.visible')
        })
        return this;
    }

    fillInputsAndCheckTabs() {
        this.fillInputAndCheckNameTab('Mark')
        this.fillInputAndCheckAddressTab('Warsaw')
        this.checkDoneTab('Mark', 'Warsaw')
        return this;
    }

    resetStepperProcess() {
        cy.findAllByRole('button')
        .contains('Reset')
        .click()
        .then(() => {
            this.fillInputAndCheckNameTab('Anna')
            this.fillInputAndCheckAddressTab('Gdansk')
            this.checkDoneTab('Anna', 'Gdansk')

        })
        return this;
    }

    validationCheck(inputName, number) {
        const lorem = "[Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s   ]"

        cy.wrap(inputName)
        .clear()
        .get('small')
        .should('contain.text', 'This field is required.')
        .and('have.class', 'text-danger')
        .wrap(inputName)
        .type(lorem)
        .get('small')
        .should('contain.text', `The maximum length for this field is ${number} characters.`)
        .and('have.class', 'text-danger')
        return this;
    }

    backToStepsInStepperProcess() {
        cy.findAllByRole('button')
        .contains('Back')
        .as('backButton')
        .click()
        .get('@address')
        .then((address) => {
            this.validationCheck(address, 30)
        })
        .get('@backButton')
        .click()
        .get('@name')
        .then((name) => {
            this.validationCheck(name, 20)
        })
        return this;
    }

    shouldHaveValidationOnWhitespaces(nameInputText, addressInputText) {
        this.fillInputAndCheckNameTab(nameInputText)
        this.fillInputAndCheckAddressTab(addressInputText)
        cy.get('#cdk-step-label-0-2')
        .should('contain.text', 'Done')
        .and('have.attr', 'aria-selected', 'true')
        .get('#cdk-step-content-0-2')
        .then(() => {
            cy.findAllByText('You are now done!')
            .get('p').eq(1)
            .then(($p) => {
                const nameValue = $p.text().trim()
                const name = `Name: ${nameInputText}`.trim()

                expect(nameValue).to.equal(name);
            })
            .get('p').eq(2)
            .then(($p) => {
                const addressValue = $p.text().trim()
                const address = `Address: ${addressInputText}`.trim()

                expect(addressValue).to.equal(address);
            })
        })
        return this;
    }

}