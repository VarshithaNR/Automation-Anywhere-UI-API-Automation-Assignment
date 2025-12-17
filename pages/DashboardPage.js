class DashboardPage {
    constructor(page) {
        this.page = page;
    }

    async goToAutomation() {
        console.log(
            'Dashboard navigation skipped: requires authenticated Automation Anywhere dashboard'
        );
    }

    async clickCreate() {
        console.log(
            'Create action skipped: requires authenticated Automation Anywhere dashboard'
        );
    }
}

module.exports = DashboardPage;