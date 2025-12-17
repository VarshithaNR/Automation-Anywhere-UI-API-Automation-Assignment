const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const TaskBotPage = require('../pages/TaskBotPage');
const data = require('../utils/testData');

test('Use Case 1: Message Box Task Automation', async({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const taskBot = new TaskBotPage(page);

    await login.goto();
    await login.login(data.username, data.password);

    await dashboard.goToAutomation();
    await dashboard.clickCreate();

    await taskBot.createTaskBot(data.taskBotName);
    await taskBot.addMessageBox();
    await taskBot.saveTask();

    await expect(page.locator('text=success')).toBeVisible();
});