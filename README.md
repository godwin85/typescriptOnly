#Playwright Typescript Tests

#Overview

This Readme contains the following information:

- High level description of the types of tests included in the framework
- Overview of technology stack
- Prerequisites
- Installation instructions
- Instructions to run the tests without docker
- Instructions to run the tests with docker
- Generating reports with Allure

#Overview of tests

The framework includes the following test types:

-API tests - These target the 'mobile number' endpoint and include:
    - A positive test to check whether a 200 'OK' response is returned when sending a payload with a valid UK mobile number.
    - A set of negative tests that check whether a 400 'bad request' response is returned after submitting a payloads containing varieties of invalid phone numbers (i.e. 0161-223-2322, 0763526121).
    - The API tests are stored in the directory 'tests/api-tests'

-UI tests - There are two end-to-end UI tests that have been created with a specific focus on the mobile phone number validation:
    - A positive test that involves inputing a valid mobile phone number. This also tests whether input values are saved and can be successfully updated if the customer has to update their mobile number.
    - A negatove test that involves inputting an invalid mobile number which has < 11 digits and validating whether the member remains on the mobile number screen with the expected error message being displayed.
- The UI tests are stored in the directory 'tests/ui-tests'

#Overview of technnology stack

The technology stack utilised for the development of this framework includes the following:

-Github 
-Docker
-Playwright
-Typescript
-Allure Reports

#Prerequisites

The following prerequisites must have been met for successful use of the framework:

- Docker Desktop must be installed in order to build a Docker image and subsequently run the tests. https://docs.docker.com/get-docker/ provides details of installing and running this on Windows, Mac and Linux.
- Node and NPM must be installed in order to run npm commands in the CLI - Instructions on how to install this on Windows, Mac or Linux are available here https://kinsta.com/blog/how-to-install-node-js/
- Git must be installed in order to clone the frameworks repository - Git can be downloaded for Windows, Mac and Linux operating systems from https://git-scm.com/downloads
- To view the codebase, a suitable IDE (i.e. vs code) needs to have been installed
- Java JDK must be installed in order to generate Allure Reports. Instructions on setting up path variables on Windows, Mac and Linux can be found in the following locations:
    -Windows - https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html
    -Mac - https://www.sajeconsultants.com/how-to-set-java_home-on-mac-os-x/
    -Linux - https://www.ibm.com/docs/ja/b2b-integrator/6.0.3?topic=variables-setting-java-linux


#Installation instructions

1. Open your Operating System Command Line 
2. Change directory to the Desktop
3. Clone the Github repository for the framework using the command 'git clone https://github.com/godwin85/typescriptOnly.git'
4. Change directory from the Desktop to the cloned directory 'TypescriptOnly'
5. Run the command 'npm i' to install all node modules required to run Playwright and Allure Reports

#Instructions to run the tests without Docker

1. Via your Operating System Command Line, access the cloned framework directory
2. Type the command 'npx playwright test'. All tests will be executed after running the command

#Instructions to run the tests with Docker

1. Start Docker desktop (if you have not previously signed in, you need to do this first before you can start Docker)
2. Via the Operating System Command Line, access the cloned framework directory
3. Run the following command to build a Docker images based on the defined Dockerfile created with the framwork project 'docker build -t playwright-docker .'
4. Once the Docker image has been built, run the following command to execute all tests 'docker run -it playwright-docker:latest npm run test'


#Generating Allure Reports after execution

During the execution of the tests, results information is captured in a json file within the directory 'allure-results'

1. When the execution of the tests has ended, run the following commands to generate and open an Allure Report:
    -npx allure generate ./allure-results --clean
    -npx allure open ./allure-report
