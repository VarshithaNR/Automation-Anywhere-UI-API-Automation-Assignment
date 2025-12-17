class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        // Open homepage only (login skipped due to security/DNS restrictions)
        await this.page.goto('https://www.automationanywhere.com/', {
            waitUntil: 'domcontentloaded'
        });
    }

    async login() {
        // Login intentionally skipped
        console.log(
            'Login skipped: Automation Anywhere uses secured SSO, CAPTCHA, and restricted endpoints'
        );
    }
}

module.exports = LoginPage;