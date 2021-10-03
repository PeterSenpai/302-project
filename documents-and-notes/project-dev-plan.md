# Preliminary Project Development Plan

Our project (Parajuniper 1) is an application that will render a patient questionnaire from a provided JSON object, present the user with a UI, and submit the captured results to an open source FHIR endpoint using a standardized FHIR API. To accomplish this project, we have set 4 milestones. These have been outline below:

---

### Milestone 1: Set up the infrastructure for the application
This milestone is the very first and most crucial one. For this we plan to set up our planned infrastructure and tech stack, and make it operational with a few easy steps and a toy application. What we will need is a CI/CD pipeline with a containerized application consisting of a frontend and backend component, as well as a testing infrastructure. We further divided the milestone into four responsibilities which we assigned to each team member:
- Jeff: Containerize the application and make sure that the containers can be spun up properly and run the application.
- Peter: Set up the CI/CD and linting pipeline and infrastructure.
- Alan: Create the frontend toy application which will print “I am running!” when started and toy tests that print “I am running a test!” when run.
- Lazar: Create the backend toy application which will print “I am running!” when started and toy tests that print “I am running a test!” when run. The tests from both the frontend and backend will be run together with one command.

---

### Milestone 2: Render questionnaire from JSON
The second milestone for this project is to be able to render the questionnaire from the JSON object. This will involve interpreting the JSON and rendering the components in the UI. We have been given some questionnaire examples to help us accomplish this. We further divided the milestone into four responsibilities which we assigned to each team member:
- Jeff: Interpret the JSON questionnaire so that it can be rendered.
- Alan: Build the various required components to display the questionnaire in the UI.
- Lazar: Write tests for all new code that is added (~70% coverage).
- Peter: Design the UI/UX.

---

### Milestone 3: Send the questionnaire response
This next milestone will be sending the patient’s response to the questionnaire. We will need to connect to the open source FHIR endpoint, gather and package the patient’s response, and send it. This will definitely involve some research into FHIR and the API. This milestone will also include any validation. We further divided the milestone into four responsibilities which we assigned to each team member:
- Jeff: Connect to the open source FHIR endpoint and send the questionnaire response using the standardized FHIR API.
- Lazar: Package the user’s response into a JSON object to be sent.
- Alan: Write tests for all new code that is added (~70% coverage).
- Peter: Research the FHIR specifications and understand how to connect and use the endpoints.

---

### Milestone 4: Documentation and final tuning 
The final milestone that we set out is to complete all the documentation for installing, running, testing, and the application in general, as well as perform any final tuning of the application (i.e. fixing typos and bugs). This also includes making sure all the documentation is correct. Documentation will be made along the way as we complete the previous milestones, but we will need to finalize it at the end. We further divided the milestone into four responsibilities which we assigned to each team member:
- Jeff: Make final edits to the documentation
- Alan: Test documentation to make sure everything outlined is correct and up-to-date.
- Lazar: Standardize documentation to make sure all documents and notes look the same and that everything is documented.
- Peter: Final tuning of the application to polish and clean all code, as well as fix any bugs or typos.

---

In order to achieve the first milestone, each team member has been assigned some immediate next actions to get started.
- Jeff will write the docker files to containerize the application, as well as test it out to make sure everything can be spun up and running with the required steps.
- Peter will set up the CI/CD and linting infrastructure and test it. He will also finish adding to the tech stack and architecture document.
- Alan will create the frontend toy application and write toy tests. He will also write a command or script to run all tests for the frontend and backend with one command.
- Lazar will create the backend toy application and write toy tests. He will also work on writing up the project plan document and finalizing it.
