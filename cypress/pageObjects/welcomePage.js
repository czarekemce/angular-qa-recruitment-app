import '@testing-library/cypress/add-commands'
import { BasePage } from './basePage'

export class WelcomePage extends BasePage {

    checkInvalidUrl() {
        this.goToInvalidUrl()
        return this;
    }

    checkIfOnHomepage() {
        cy.get('#rocket')
        .should('be.visible')
        .parent()
        .within(($parent) => {
            cy.wrap($parent)
            .should('contain.text', 'Recruitment app is running!')
        })
        return this;
    }

    goToButtons(web, subpath, endpoint) {
        const href = `[href="https://${web}angular.io/${subpath}"]`
        const webUrl = `https://${web}angular.io/${endpoint}`

        cy.get(href).then(($button) => {
            cy.wrap($button)
            .invoke('removeAttr', 'target')
            .wrap($button)
            .click()
          })
          cy.wait(1000)
          .url()
          .then((url) => {
            expect(url).to.equal(webUrl)
          })
          .go('back')
          return this;
    }

    goToLearnAngular() {
        this.goToButtons('', 'tutorial', 'tutorial')
        return this;
    }


    goToCLIDoc() {
        this.goToButtons('', 'cli', 'cli')
          return this;
    }
    
    goToAngularBlog() {
        this.goToButtons('blog.', '', '')
        return this;
    }
    goToAngularDevTools() {
        this.goToButtons('', 'devtools/', 'guide/devtools')
        return this;
    }

    displayValueButtons(buttonText, displayText) {
        cy.findAllByText(buttonText)
        .should('be.visible')
        .click()
        .then(() => {
            cy.get('.terminal')
            .should('be.visible')
            .and('contain.text', displayText)
        })
        return this;
    }

    displayCodeForNewComponent() {
        this.displayValueButtons('New Component', 'ng generate component xyz')
        return this;
    }

    displayCodeForAngularMaterial() {
        this.displayValueButtons('Angular Material', 'ng add @angular/material')
        return this;
    }

    displayCodeForAddPWASupport() {
        this.displayValueButtons('Add PWA Support', 'ng add @angular/pwa')
        return this;
    }

    displayCodeForAddDependency() {
        this.displayValueButtons('Add Dependency', 'ng add')
        return this;
    }

    displayCodeForRunAndWatchTests() {
        this.displayValueButtons('Run and Watch Tests', 'ng test')
        return this;
    }

    displayCodeForBuildForProduction() {
        this.displayValueButtons('Build for Production', 'ng build')
    }
}