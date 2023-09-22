import { BasePage } from "../pageObjects/basePage";
import { WelcomePage } from "../pageObjects/welcomePage";

describe('E2E tests', () => {
    const basePage = new BasePage();

    beforeEach(() => {
        basePage
            .goToBaseUrl();
    });

    it('Welcome page tests', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .checkInvalidUrl()
            .checkIfOnHomepage()
            .goToLearnAngular()
            .goToCLIDoc()
            .goToAngularBlog()
            .goToAngularDevTools()
            .displayCodeForNewComponent()
            .displayCodeForAngularMaterial()
            .displayCodeForAddPWASupport()
            .displayCodeForAddDependency()
            .displayCodeForRunAndWatchTests()
            .displayCodeForBuildForProduction();
    });
});
