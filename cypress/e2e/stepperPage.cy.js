import { BasePage } from "../pageObjects/basePage";
import { StepperPage } from "../pageObjects/stepperPage";

describe('E2E tests', () => {
    const basePage = new BasePage();

    beforeEach(() => {
        basePage
            .goToBaseUrl();
    });

    it('Stepper page tests', () => {
        const stepperPage = new StepperPage();
        stepperPage
            .moveToStepperPage()
            .checkIfOnStepperPage()
            .fillInputsAndCheckTabs()
            .resetStepperProcess()
            .backToStepsInStepperProcess();
    })

    it('Input should have validation on whitespaces', () => {
        const stepperPage = new StepperPage();
        stepperPage
            .shouldHaveValidationOnWhitespaces();
    })
});