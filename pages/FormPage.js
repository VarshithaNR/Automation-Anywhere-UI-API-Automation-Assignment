class FormPage {
    constructor(page) {
        this.page = page;
    }

    async createForm(name) {
        console.log(`Mock create Form: ${name}`);
    }

    async designForm() {
        console.log('Mock form design (Textbox + File Upload)');
    }

    async fillForm() {
        console.log('Mock fill form and upload file');
    }

    async saveForm() {
        console.log('Mock save form');
    }
}

module.exports = FormPage;