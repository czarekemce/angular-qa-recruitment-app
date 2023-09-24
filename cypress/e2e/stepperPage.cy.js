import { StepperPage } from "../pageObjects/stepperPage";

describe('E2E tests', () => {
    const basePage = new StepperPage();

    beforeEach(() => {
        basePage
            .goToBaseUrl()
            .moveToStepperPage();
    });

    it('Check if on Stepper Page', () => {
        const stepperPage = new StepperPage();
        stepperPage
            .checkIfOnStepperPage()
    });

    it('Fill and check inputs and tabs, reset process and check back button in process', () => {
        const stepperPage = new StepperPage();
        stepperPage
            .fillInputsAndCheckTabs()
            .resetStepperProcess()
            .backToStepsInStepperProcess();
    })

    it('Input should have validation on whitespaces', () => {
        const stepperPage = new StepperPage();
        stepperPage
            .shouldHaveValidationOnWhitespaces('White   ', 'Spaces   ');
    })
});