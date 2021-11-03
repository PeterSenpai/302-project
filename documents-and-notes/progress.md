# Progress Notes

With this assignment, we have made progress towards our second and third milestones. Specifically, these milestones were to render a questionnaire in the UI for the user to submit a response, and to send the response to the open source FHIR endpoint. To complete these milestones, a set of features were created with more specific subtasks, as well as acceptance criteria. In order to know that we have achieved these two milestones, we will need to have all of their respective features completed, as well as their acceptance criteria satisfied. The specific acceptance criteria can be found in [`/documents-and-notes/features.md`](features.md). Further, we contacted and met with our industry partner to clarify what constitutes success for these two milestones.

## What constitutes success?
In addition to the specific acceptance criteria that we have outlined for our features, we met with our industry partner Alex to outline a more general definition of success for the milestones we are working on for this assignment (milestones #2 and #3).

For milestone #2, together with our industry partner, we defined success as having a rendered questionnaire in the UI presented to the user. The user should be able to interact with it and type or select responses to questions. The JSON questionnaire should be converted into UI components on a webpage, and our application should be compatible with multiple questionnaires. Further, some validation should be done to make sure that the user’s responses make sense and are of the correct type.

For milestone #3, success was defined as being able to have the server accept our response and that it conforms to the specification. We will need to validate against the test server to make sure that everything is compatible. The JSON questionnaire response that we generate will need to be compliant with the standard. Some validation will need to be done in the backend before sending the response to the server.

## Tasks and responsibilities
Each team member had the following tasks in order to complete the two features for this assignment that will make progress towards milestones #2 and #3. The third feature will complete milestone #3, but it was not included as part of this assignment.
### Feature 1:
- Choose which questionnaire we want to use
  - Assigned to: Team
  - Status: complete
- Read and understand FHIR documentation, fetch questionnaire in backend, and send it to frontend
  - Assigned to: Jefferson
  - Status: complete
- Interpret the questionnaire JSON into formats that are suitable for frontend
  - Assigned to: Peter
  - Status: complete
- Design, implement, and render the UI components from the interpreted information
  - Assigned to: Alan
  - Status: complete
- Write tests for the frontend and backend work done in this feature
  - Assigned to: Lazar
  - Status: complete
### Feature 2:
- Design a response class according to FHIR endpoint’s format
  - Assigned to: Jefferson
  - Status: complete
- Handle questionnaire form-filling including performing some validation
  - Assigned to: Peter
  - Status: complete
- Create the user’s response object
  - Assigned to: Alan
  - Status: complete
- Send the object to the backend
  - Assigned to: Lazar
  - Status: complete
- Write tests for the frontend and backend work done in this feature
  - Assigned to: Lazar
  - Status: complete
### Feature 3:
- Understand FHIR and what format is needed for sending the response
  - Status: in progress
- Connect to the open source endpoint
  - Status: not started
- Send the user’s response
  - Status: not started

Upon completing the features set out for this assignment, we ran our acceptance tests and verified that all acceptance criteria was satisfied for the completed tasks. We also made sure that our industry partner’s definition of success was achieved.