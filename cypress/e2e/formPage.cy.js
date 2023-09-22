import { BasePage } from "../pageObjects/basePage";
import { FormPage } from "../pageObjects/formPage";

describe('E2E tests', () => {
    const basePage = new BasePage();

    beforeEach(() => {
        basePage
            .goToBaseUrl();
    });

    it('Form page tests', () => {
        const formPage = new FormPage();
        formPage
            .moveToFormPage()
            .checkIfOnFormPage()
            .checkInputsInForm()
            .newHeroForm()
            .fillTheFormAndSubmit('Test name', 'Test alter ego', 1)
            .editFormAndSubmit();
    });

    it('Input should have validation on special characters', () => {
        const formPage = new FormPage();
        formPage
            .shouldHaveValidationOnWhiteSpaces();
    })

});