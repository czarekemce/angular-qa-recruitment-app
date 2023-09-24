import { BasePage } from "../pageObjects/basePage";
import { WelcomePage } from "../pageObjects/welcomePage";

describe('E2E tests', () => {
    const basePage = new BasePage();

    beforeEach(() => {
        basePage
            .goToBaseUrl();
    });

    it('Check if invalid url transfers to homepage', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .checkInvalidUrl();
    });

    it('Check if on homepage', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .checkIfOnHomepage();
    });

    it('Check if button transfers to angular web - /tutorial', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .goToLearnAngular();
    });

    it('Check if button transfers to angular web - /cli', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .goToCLIDoc();
    });

    it('Check if button transfers to blog.angular/', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .goToAngularBlog();
    });

    it('Check if button transfers to angular web - /guide/devtools', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .goToAngularDevTools();
    });

    it('Check if New Component button displays correct code', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .displayCodeForNewComponent();
    });

    it('Check if Angular Material button displays correct code', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .displayCodeForAngularMaterial();
    });

    it('Check if Add PWA Support button displays correct code', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .displayCodeForAddPWASupport();
    });

    it('Check if Add Dependency button displays correct code', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .displayCodeForAddDependency();
    });

    it('Check if Run and Watch Tests button displays correct code', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .displayCodeForRunAndWatchTests();
    });

    it('Check if Build for Production button displays correct code', () => {
        const welcomePage = new WelcomePage();
        welcomePage
            .displayCodeForBuildForProduction();
    });
});
