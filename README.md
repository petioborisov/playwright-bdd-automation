# Automation test framework using Playwright + BDD

## Setup & Run
1. Install: `npm install`
2. Run bddgen: `npx bddgen` - translates **.feature** files into executable Playwright test files
3. Run Tests: `npx playwright test`
4. Open Report: `npx playwright show-report`

## Scenarios Covered
1. **Login:** Valid and Invalid flows:
   1. Successful login with correct credentials
   2. Login with invalid credentials
2. **Buy a product:** 
   1. Buy an Apple product and verify the shopping cart


## Project Structure
```
lambdatest-automation/
│
├── .features-gen/                 # Auto-generated Playwright specs from BDD features
│   └── features/
│       └── lambdatest-features/
│           ├── login.feature.spec.js
│           └── shopping.feature.spec.js
│
├── .github/                 # GitHub Actions workflows for CI/CD
│   └── workflows/
│           └── playwright.yml
│
├── features/                      # Gherkin feature files (BDD scenarios)
│   └── lambdatest-features/
│       ├── login.feature
│       └── shopping.feature
│
├── src/
│   ├── fixtures/                  # Custom Playwright fixtures
│   │   └── lambdatest-fixtures/
│   │       └── LambdatestFixture.ts
│   │
│   ├── pages/                     # Page Object Model (POM)
│   │   ├── BasePage.ts
│   │   └── lambdatest-pages/
│   │       ├── HomePage.ts
│   │       ├── LoginPage.ts
│   │       ├── ProductPage.ts
│   │       └── CartPage.ts
│   │
│   └── steps/                     # Step Definitions for BDD
│       └── lambdatest-steps/
│           ├── login.steps.ts
│           └── shopping.steps.ts
│
├── playwright-report/             # HTML test reports
├── test-results/                  # Raw Playwright test output
│
├── playwright.config.ts           # Playwright configuration
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```
## Execution Flow:
1. Business scenarios are written in `.feature` files  
2. `bddgen` translates them into executable Playwright specs  
3. Step Definitions connect Gherkin steps to UI actions  
4. Page Objects encapsulate UI logic  
5. Playwright runs tests and generates reports  

## Future Improvements

- Store credentials securely using environment variables or a Vault / AWS secrets
- Cross-browser execution  
- API + UI hybrid testing  
- Allure reporting  
- Environment-based configuration  
