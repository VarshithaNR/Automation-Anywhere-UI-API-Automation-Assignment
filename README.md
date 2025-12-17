📌 Overview

This repository contains the UI and API automation assignment completed for the SDET Intern role using Playwright.
The automation framework follows the Page Object Model (POM) design pattern and demonstrates structured, scalable test automation.

Due to security constraints (SSO, CAPTCHA, restricted dashboards) on the Automation Anywhere production platform, post-login UI flows are logically mocked, while preserving the complete automation framework and test logic.

🛠 Framework and Tools Used

Automation Framework: Playwright

Programming Language: JavaScript (Node.js)

Design Pattern: Page Object Model (POM)

Automation Types:

UI Automation

API Automation (Schema Validation)

Browser: Chromium

Reporting: Playwright HTML Report

Version Control: Git & GitHub

📂 Project Structure
automation-anywhere-assignment/
├── pages/              # Page Object Model files
├── tests/              # Test cases
├── utils/              # Test data
├── playwright.config.js
├── package.json
└── README.md

⚙️ Setup Instructions
Prerequisites

Ensure the following are installed:

Node.js (LTS)

Git

Verify installation:

node -v
npm -v

Clone the Repository
git clone https://github.com/VarshithaNR/Automation-Anywhere-UI-API-Automation-Assignment.git
cd automation-anywhere-assignment

Install Dependencies
npm install
npx playwright install

▶️ Execution Instructions
Run Tests (Chromium)
npx playwright test --project=chromium

View HTML Report
npx playwright show-report


The report opens at:

http://localhost:9323

✅ Test Scenarios Covered
Use Case 1: Message Box Task (UI Automation)

Login flow (mocked)

Navigation to Automation module (mocked)

Task Bot creation

Message Box action addition

Logical assertion for flow completion

Use Case 2: Form with File Upload (UI Automation)

Login flow (mocked)

Form creation

Adding Textbox and File Upload controls

Form save validation

Logical assertion for successful execution

Use Case 3: Learning Instance API (API Automation)

API response schema validation

Field-level checks (id, name, status)

Functional accuracy verification

⚠️ Environment & Configuration Notes

Automation Anywhere is a secured SaaS platform using:

SSO authentication

CAPTCHA

Role-based dashboards

Due to restricted authentication endpoints and lack of test credentials, the following are intentionally mocked:

Login flow

Dashboard navigation

Task and Form creation UI actions

Assertions validate logical flow completion instead of real UI confirmation messages.

This approach follows industry best practices and avoids bypassing security controls.

📊 Reporting

Playwright HTML report is generated after execution

Includes test status, execution time, and failure artifacts (screenshots/videos)

📌 Conclusion

This project demonstrates a structured Playwright automation framework using POM, covering both UI and API automation while responsibly handling real-world security limitations of enterprise SaaS applications.


