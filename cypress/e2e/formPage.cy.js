import { FormPage } from "../pageObjects/formPage";

describe('E2E tests', () => {
    const basePage = new FormPage();

    beforeEach(() => {
        basePage
            .goToBaseUrl()
            .moveToFormPage();
    });

    it('Check if on /form page', () => {
        const formPage = new FormPage();
        formPage
            .checkIfOnFormPage();
    });

    it('Check visibility of inputs and buttons', () => {
        const formPage = new FormPage();
        formPage
            .checkInputsInForm();
    });

    it('Check New Hero button', () => {
        const formPage = new FormPage();
        formPage
            .newHeroForm();
    });

    it('Check Submit and Edit buttons', () => {
        const formPage = new FormPage();
        formPage
            .fillTheFormAndSubmit('Test name', 'Test alter ego', 1)
            .editFormAndSubmit();
    });

    it('Input should have validation on special characters', () => {
        const formPage = new FormPage();
        formPage
            .shouldHaveValidationOnWhiteSpaces('$%&', '@&*^%');
    })

});