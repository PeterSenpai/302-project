# Feature Overview

This document will serve to outline all the features that we implemented for this project. For each feature we will: elaborate on it, explain how it works, and outline the acceptance criteria and how these criteria were met. The acceptance criteria for each feature were negotiated with our industry partner Alex.
 
## Feature 1: Backend endpoint for fetching a JSON questionnaire
This feature consists of a basic GET endpoint in the backend which sends a JSON questionnaire to the frontend. The questionnaire is stored in a JSON file in the backend and when the endpoint is triggered, the JSON is sent to the frontend.
The acceptance and verification criteria for this feature were:
- The backend should send a proper JSON questionnaire when a request is made.

This can be validated with tests in the backend testing suite.
 
## Feature 2: Rendering the questionnaire on the frontend
This feature renders a questionnaire from a JSON. The JSON is in a standard FHIR format. For our application, we used some sample questionnaires from the FHIR documentation. 

In this assignment we decided to implement our own parsing logic. Thus, the frontend side now consists of two major parts of logic: parsing and rendering. 

When we first get the FHIR questionnaire JSON file, our parsing logic would take the FHIR JSON file and produce two results. One is an array of questions that needs to be rendered in object format. The other one is the questionnaire response object with empty question values. The parsing logic can handle most common cases such as different question types, nested items, and enable question when a certain condition is met. It also produces a questionnaire response object that has the same structure as the questionnaire JSON.

The rendering logic renders each one of the questions from the array that the parsing logic produces. Each answer changed by the respondent would be detected and then it sees if any action should be taken such as to show or hide certain questions when a certain answer gets selected.

The acceptance and verification criteria for this feature were:
- The user will be presented with a questionnaire in the UI.
- The questionnaire will have all the questions and fields present.
- Fields in the questionnaire will be able to be populated and the fields will accept the correct formats and data types.

These criteria can be validated with tests in the frontend test suite, but also with some manual testing. The application (frontend and backend) can be started, and the webpage can be loaded to test the questionnaire. Doing this will validate that the visual aspect of the questionnaire is being rendered properly. The structural part can also be validated this way, but the automated tests cover that as well.
 
## Feature 3: Handling and packaging the user response
This feature handles the user’s response to the questionnaire and packages the data in a standard format, similar to how the questionnaire is in a standard format too. The data format follows the structure of the questionnaire itself. Once the object is created, it is sent to the frontend through an endpoint.

As mentioned in the earlier section, our parsing logic would produce a response object with all the questions unanswered (empty string as value). When the respondent completes the survey, we then insert the values of answers into the response object. The insertion logic traverses the whole object, using the `linkId` field to identify each question and replaces the empty strings with the actual answer that respondent picked. We then send the response to the backend.

The acceptance and verification criteria for this feature were:
- The user will be able to submit the questionnaire after completing it.
- The user will see a message if not all required fields have been filled.
- The backend will receive the data object.

These criteria can be validated with tests in the frontend testing suite. The tests check that the structure of the response is correct and follows the structure of the questionnaire. Further, the frontend does some validation to make sure that the data type of what is entered into a field matches what is required (e.g. validates that birth weight is a number).
 
## Feature 4: Backend endpoint for receiving the questionnaire response and sending it to the FHIR endpoint
This feature consists of a backend POST endpoint which receives a questionnaire response from the frontend and forwards it to an open source FHIR endpoint.

The acceptance criteria for this feature were the following:
- The backend should receive the questionnaire response from the frontend.
- The backend should send the received questionnaire response to the open source FHIR endpoint.
- A successful response code should be received from the FHIR endpoint.

These criteria can be validated with tests in the backend testing suite.

<br>

Overall, the main acceptance criteria that was negotiated with our industry partner Alex, was the following:
- A questionnaire should be rendered accurately.
- The user response should be captured and sent to the FHIR endpoint.

These criteria were successfully met for our project.

<br>

Some features that were planned earlier in the project needed to be dropped to focus on more important features. During work on the project, some adjustments needed to be made to our approach for rendering the JSON questionnaire on the frontend which required additional work. Due to this feature being much more important than the optional features that we outlined, those features were dropped because we did not have enough time to implement them. The decision to drop these features was reached in a group meeting where we discussed the current progress of the project and estimated the remaining time of features that were currently being worked on. The features that were dropped were the following:
1. Log-in
2. Choosing a questionnaire
