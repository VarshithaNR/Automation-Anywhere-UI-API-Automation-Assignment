class TaskBotPage {
    constructor(page) {
        this.page = page;
    }

    async createTaskBot(name) {
        console.log(`Mock create Task Bot: ${name}`);
    }

    async addMessageBox() {
        console.log('Mock add Message Box action');
    }

    async saveTask() {
        console.log('Mock save Task Bot');
    }
}

module.exports = TaskBotPage;