# 🧪 Cypress QA Automation Project (E-commerce)

## 📌 Project Overview
This project demonstrates automated testing of an e-commerce web application using Cypress.

It demonstrates end-to-end test automation using modern best practices, including:

- Page Object Model (POM) design pattern
- Custom Cypress commands
- Data-driven testing using fixtures
- Automated reporting with Allure and Mochawesome
- CI/CD integration via GitHub Actions

The goal is to showcase expertise in test case design, automation, reporting, and continuous integration.

---

## 🛠️ Tech Stack
- Cypress – End-to-end testing framework
- JavaScript – Test scripting language
- Node.js – Runtime environment
- Allure & Mochawesome – Test reporting
- GitHub Actions – CI/CD automation

---

## 📂 Project Structure ✔

cypress/
├── e2e/           # Test specifications
├── fixtures/      # Test data
├── support/       # Custom commands and reusable utilities
└── pageObjects/   # Page Object Model classes

test-cases/         # Manual test cases
test-report/        # Bug reports and test artifacts
cypress.config.js   # Cypress configuration
package.json        # Node.js project config

---

## ✅ Test Coverage

### ✔ Login Module

| Test Case | Description                          | Type     | Status |
| --------- | ------------------------------------ | -------- | ------ |
| TC_001    | Valid login with registered user     | Positive | ✅     |
| TC_002    | Invalid login with wrong credentials | Negative | ❌     |


### ✔ Inventory Module

| Test Case | Description               | Type       | Status |
| --------- | ------------------------- | ---------- | ------ |
| TC_003    | Add a product to the cart | Functional | ✅     |


### ✔ Checkout Module

| Test Case | Description                          | Type       | Status |
| --------- | ------------------------------------ | ---------- | ------ |
| TC_004    | Complete checkout with valid details | End-to-End | ✅     |
| TC_005    | Attempt checkout with empty fields   | Negative   | ❌     |


---

## 🧪 Test Cases
Manual test cases are available in: test-cases/test-cases.md

---

## 🐞 Bug Reports
Bug reports are available in: test-report/bug-report.md


---

## ▶️ How to Run Tests

### Install dependencies
npm install

### Open Cypress UI
npx cypress open

### Run in headless mode
npx cypress run


---

## 📊 Test Summary

| Total Tests| Passed | Failed |
|------------|--------|--------|
| 5          | 4      | 1      |

---

## 🚀 Key Features
- Page Object Model (POM) – clean, reusable page interactions
- Custom Cypress Commands – simplifies repetitive actions
- Data-driven Testing – uses fixtures for test data
- End-to-End Test Scenarios – login, inventory, checkout flows
- Automated Reporting – Allure & Mochawesome
- CI/CD Ready – GitHub Actions workflow with environment secrets

---

## ⚙️ CI/CD & Reporting Integration
- Cypress tests are fully integrated into GitHub Actions
- Secrets for credentials are stored in GitHub repository/environment secrets
- Allure and Mochawesome reports are generated as artifacts
- Reports can be downloaded and viewed for test analysis
- Future enhancement: deploy Allure reports to GitHub Pages for online viewing

## 👨‍💻 Author
QA/Test Automation Engineer: Tina Fernandes