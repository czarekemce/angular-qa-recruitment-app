// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

before(() => {
    // Sprawdź wartość zmiennej środowiskowej
    if (Cypress.env('CYPRESS_CONTINUE_ON_ERROR') === 'true') {
      // Ustaw odpowiednie opcje Cypress, jeśli chcesz kontynuować testy po błędzie
      Cypress.config('defaultCommandTimeout', 0) // Wyłącz limit czasu na komendy
    }
  })