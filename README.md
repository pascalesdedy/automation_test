# Cermati Registration Page Automation

Automation testing framework for Cermati's registration page using Playwright and TypeScript.

## Features

- End-to-end testing of Cermati's registration flow
- Page Object Model (POM) design pattern
- Support for multiple test scenarios (positive & negative cases)
- HTML test reports
- Screenshot on test failure

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update the values if needed

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in headed mode:
```bash
npx playwright test --headed
```

Run a specific test file:
```bash
npx playwright test tests/join_cermati.spec.ts
```

## Project Structure

```
├── page_objects/       # Page object classes
│   ├── base_page.ts    # Base page with common methods
│   ├── join_page.ts    # Registration page elements and actions
│   └── verify_otp_page.ts # OTP verification page elements and actions
├── tests/              # Test files
│   └── join_cermati.spec.ts  # Test cases
├── .env               # Environment variables
├── env.example       # Example environment variables
├── package.json       # Project dependencies
└── playwright.config.ts # Playwright configuration
```

## Test Cases

### Positive Tests
- Verify page title
- Input validation for all form fields
- Link navigation (Syarat & Ketentuan, Kebijakan Privasi)
- Successful form submission

### Negative Tests
- Invalid phone number format
- Invalid email format
- Invalid name format (numbers)
- Empty field validations

## Viewing Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
