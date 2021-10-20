# Features

Upon completing the first milestone, we have decided to plan out the next two milestones. We have created a list of features for these milestones, and have broken them up into subtasks, the first of which have been assigned to team members and given due dates. We prioritized them based on what features and tasks need to be completed first before others can be worked on. We strive to have a working application first, before having lots of features. Working on many features at the same time without having a basic working application will lead to scrambling and chaos when everything needs to be merged and integrated. Further, we have defined acceptance criteria for each feature. This is how we expect the team members as well as the client to validate our work and determine that it is complete and correct. The remaining features have been created as part of the roadmap, but the due dates will be set at a later date along with assigning the tasks to team members. The features with lower priorities are ones that can be dropped if there is not enough time to accomplish them as the higher priority features require the most focus.

---

## Feature 1: Rendering the questionnaire
For this feature, the backend will grab a questionnaire and send the JSON to the frontend. Next, the frontend will interpret the JSON and render it in the UI. This task will require some research on how the questionnaire JSON is formatted and what the best way to interpret and render it is. To start off, we will be using a single questionnaire, but later in the project we will provide support for multiple questionnaires. To accomplish this feature, the following tasks will need to be completed. A team member has been assigned to each and a due date has been set. These due dates are estimates for completion, but we have some leeway to move them around.

### Tasks:
- Choose which questionnaire we want to use
  - Assigned to: Team
  - Due: Oct 21st
- Read and understand FHIR documentation, fetch questionnaire in backend, and send it to frontend
  - Assigned to: Jefferson
  - Due: Oct 26th
- Interpret the questionnaire JSON into formats that are suitable for frontend
  - Assigned to: Peter
  - Due: Oct 26th
- Design, implement, and render the UI components from the interpreted information
  - Assigned to: Alan
  - Due: Oct 28th
- Write tests for the frontend and backend work done in this feature
  - Assigned to: Lazar
  - Due: Oct 28th

The second and third tasks can be done in parallel but will need to be merged in order to finish the remaining two tasks. However, work can be started on these two tasks before the first ones are fully complete.

### Acceptane Criteria:
- User will be presented with a questionnaire in the UI
- The questionnaire will have all questions and fields present
- Fields in the questionnaire will be able to be populated

---

## Feature 2: Handling and packaging user response 
For this feature, the frontend will handle the user response and package it into an object to send the backend. We will need to decide on a response class that the frontend will create an instance of for the user response. To accomplish this feature, the following tasks will need to be completed. A team member has been assigned to each and a due date has been set. These due dates are estimates for completion, but we have some leeway to move them around.
Handle user response and packaging the user response into an object

### Tasks:
- Design a response class according to FHIR endpoint’s format
  - Assigned to: Jefferson
  - Due: Oct 28th
- Handle questionnaire form-filling including performing some validation
  - Assigned to: Peter
  - Due: Oct 31st
- Create the user’s response object
  - Assigned to: Alan
  - Due: Nov 2nd
- Send the object to the backend
  - Assigned to: Lazar
  - Due: Nov 2nd
- Write tests for the frontend and backend work done in this feature
  - Assigned to: Lazar
  - Due: Nov 2nd

The first two tasks will require the most work and will need to be finished first and merged in order to complete the remaining three tasks. The last task can be started while the other tasks are still in progress.

### Acceptance Criteria:
- The user will be able to submit the questionnaire after completing it
- The user will see a message if not all required fields have been filled
- The backend will log the user response to the console (Note: this is only a temporary measure put in place in order to tell if the backend received the response. Once real data is used and the next feature is implemented, this will be removed.)

---

## Feature 3: Sending the response
With this feature the backend will connect to the open source FHIR endpoint and send the user response in the required format. To accomplish this feature, the following tasks will need to be completed.

### Tasks:
- Understand FHIR and what format is needed for sending the response
- Connect to the open source endpoint
- Send the user’s response

### Acceptance Criteria:
- The backend will connect and send the response
- The FHIR side of things will successfully receive the response

---

## Feature 4: Choosing a questionnaire (this feature is lower priority)
For this feature, the user will have the ability to choose a questionnaire from a list of available questionnaires that they will be presented with in the UI. The chosen questionnaire will then be rendered to the user. To accomplish this feature, the following tasks will need to be completed.

### Tasks:
- Gather possible questionnaires to use
- Create a list in the UI for the user to select
- Ask the backend for the questionnaire

### Acceptance Criteria:
- The user will see a list of questionnaires in the UI
- The user will be able to select and questionnaire and have it rendered on the screen

---

## Feature 5: Log-in (this feature is lower priority)
With this feature we will be adding a login screen for application. The entered information will be checked with the backend and a successful login will take the user to the first page of the application. To accomplish this feature, the following tasks will need to be completed.

### Tasks:
- Create a login page in the UI
- Validate the entered information with the backend

### Acceptance Criteria:
- The user will be presented with a login screen
- Successfully logging in will take the user to the first page of the application
- An unsuccessful login will give the user an error message
