# Estenarh Appium Automation

This project contains automated end-to-end tests for the Estenarh mobile application using Appium and WebdriverIO.

## Prerequisites

- Node.js
- Appium
- Android Studio or Xcode for emulators/simulators

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RohanUlHaq/Estenarh.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Tests

To run the end-to-end tests, execute the following command:

```bash
npm test
```

## Project Structure

- `app/`: Contains the application file.
- `test/specs/`: Contains the test script files.
- `test/screenobjects/`: Contains the screen object models for different application screens.
- `test/helpers/`: Contains helper functions for the tests.
- `test/constants/`: Contains constant values used in the tests.
- `wdio.conf.ts`: The WebdriverIO configuration file.
- `tsconfig.json`: The TypeScript configuration file.
