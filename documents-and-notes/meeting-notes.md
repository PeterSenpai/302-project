# Meeting Notes

### October 28th:

#### Meeting Length:

1 hour

#### Attendees:

Lazar, Alan, Jeff, Peter

#### Agenda (ordered by priority):

- Do the A1 postmortem (30 minutes)
  - What was achieved?
  - What went wrong?
  - What adjustments need to be made?
- Discuss progress of project and what needs to be worked on next (20-25 minutes)

#### Things that were done:

- Performed A1 postmortem
  - Discussed what goals were completed
    - All A1 goals have been achieved
  - Analyzed what went wrong and how we overcame it
    - Environment issues with containerization that were fixed
    - Delay due to switching projects
  - Discussed what adjustments would need to be made with the knowledge and what we have learned from A1 and the current work on A2
    - Switch UI from Material UI to Ant Design because there are more components that are useful for us and is easier to use
- Discussed findings about libraries that can be used for rendering the questionnaires
  - Found a new library that is much better and can convert the questionnaire JSON into a schema which is more readable and easier to render
  - The library is also able to convert the user’s response to a proper FHIR questionnaire response
- Discussed what the backend will need to do for receiving the response and sending it to the FHIR endpoint
- Planned what the questionnaire page will look like
  - To include a title, the questionnaire, and a submit button
  - As we add support for more questionnaires, there will be an option to go back to the questionnaire select screen

#### Next steps/Action Items:

- Finalize and clean up the A1 postmortem document
- Continue work on rendering the questionnaire on the frontend
- Begin work on the backend endpoint for receiving the questionnaire response

#### Signed by:

- [ ] Jeff
- [x] Lazar
- [ ] Peter
- [ ] Alan

---

### October 26th:

#### Meeting Length:

45 minutes

#### Attendees:

Lazar, Alan, Jeff, Peter, Alex

#### Agenda (ordered by priority):

- Ask Alex questions that we have that are important for us to continue work on the assignment. (15-20 minutes)
- Ask Alex what constitutes success for the milestones that we are working on with this assignment. This is needed for the progress document which is a deliverable for A2. (10-15 minutes)

#### Things that were done:

- Discussed the findings with Alex
  - For the existing converter there are some problems
    - no npm support
    - some module issues
    - only work with vue
    - the example questionnaires only work with cql-worker which has the same problem
  - For the demo app
    - Only in Vue and uses SurveyJs
- Asked Alex about the scope
  - The complexity of the questionnaires app
  - The coverage of all the FHIR questionnaires
- Asked about the copyright issues
  - So far, we can reuse any logic from the two repos.
- Asked Alex about what constitutes success for milestones 2 and 3
  - Milestone 2:
    - A questionnaire should be rendered
    - The user should be able to interact with it
  - Milestone 3:
    - The server must accept the response and the response must conform to the specification
    - Validate against test server
    - The JSON questionnaire response that we generate must be compliant with the standard

#### Next steps/Action Items:

- Try to use the existing logic and React to create questionnaire
- Try to implement the parsing logic for example questionnaires
- Time box the previous two and see which one is more doable
- Add the information from Alex to the progress document

#### Signed by:

- [x] Jeff
- [x] Lazar
- [x] Peter
- [x] Alan

---

### October 23rd:

#### Meeting Length:

30 minutes

#### Attendees:

Lazar, Jeff, Peter

#### Agenda (ordered by priority):

- Recap on the features that we aim to implement in this milestone (10 minutes)
- Discuss on individual responsibilities on fetching vs parsing questionnaires (10 minutes)
- Progress check-in for backend (10 minutes)

#### Things that were done:

- Define fetching endpoint structure
  - For now, only handle questionnaire without external links to options
  - JSON specification: https://www.hl7.org/fhir/json.html
  - Questionnaire example with external link
    - https://www.hl7.org/fhir/questionnaire-cqf-example.json.html
  - Questionnaire example without external link
    - https://www.hl7.org/fhir/questionnaire-zika-virus-exposure-assessment.json.html

#### Next steps/Action Items:

- Look into the mock FHIR app implementation Alex said
- Write a route in backend to provide questionnaires in json format
  E.g. http://localhost:8080/api/questionnaires
- Continue to work on front end, back end

#### Signed by:

- [x] Jeff
- [x] Lazar
- [x] Peter

---

### October 22nd:

#### Meeting Length:

30 minutes

#### Attendees:

Lazar, Alan, Peter

#### Agenda (ordered by priority):

- Discuss progress made on current tasks (5 minutes)
- Discuss blockers faced and their solutions (10 minutes)
- Review things discussed with Alex on October 18 in-class meeting (10 minutes)
- Plan next steps and what things need to be done before the next meeting (5 minutes)

#### Things that were done:

- Completed features document
- Implemented part of the API endpoints
- Researched on different questionnaire JSONs
  - Some questionnaires have fields that are linked to other websites and requires an account
  - We will discuss with Alex about these questionnaires
  - For the time being, only the other questionnaires will be rendered in the UI
- Discussed the practicability of rendering a hard-code questionnaire in the UI before all API endpoints are completed
  - Questionnaire JSON should be collected from the back end through the API
  - Due to time constraint, we decided that it is better to hard code a questionnaire in the front end before back end is completed and replace it afterwards
- Reviewed an existing FHIR project that Alex mentioned in the in-class meeting
  - Alex said we can use part of the project
  - We discussed how the project can be used to fulfil the features we are implementing
- Scheduled a meeting on October 23rd with Jeff to discuss his progress and blockers

#### Next steps/Action Items:

- Reach out to Alex to schedule a meeting during weekend to discuss his expectation on the project
- Work on postmortem on A1
- Continue to work on front end, back end

#### Signed by:

- [x] Alan
- [x] Lazar
- [x] Peter

---

### October 14th:

#### Meeting Length:

1 hour

#### Attendees:

Lazar, Alan, Jeff, Peter

#### Agenda (ordered by priority):

- Discuss A2 and the deliverables (5 minutes)
- Plan out the features and begin planning subtasks and their due dates (30-40 minutes)
- Plan next steps and what things need to be done before the next meeting (10 minutes)
- Discuss any concerns about A1 (5 minutes)

#### Things that were done:

- Looked at the various deliverables for A2 and discussed them and the order that we will do them in.
  - We decided that the hardest part will be the development of the features so we will prioritize that.
  - The demonstrated progress document will be worked on in parallel.
  - The postmortem for A1 can be done in a constant amount of time so we will leave that for later, but not too late since we want to work on it with A1 still fresh in our minds.
  - We began working on the features document.
    - We split up the next two milestones into 4 features and prioritized them, as well as discussed which ones can be dropped if there isn’t enough time.
    - For each feature, we came up with a list of subtasks.
    - For the first two features, we assigned the subtasks to group members and set due dates for each subtask.
    - For the first feature, the first two subtasks can be done in parallel but will need to be merged in order to finish the other two subtasks. However, work can be started on the third and fourth subtasks before the first two are fully complete.
    - For the second feature, the first two subtasks will require the most work and will need to be finished first and merged in order to complete the remaining three tasks. The last task can be started while the other tasks are still in progress.
  - Upon discussing the task of interpreting the JSON questionnaire, we decided that we will need to do some further research and get in contact with Alex to raise any questions and get some clarification.
- We discussed what needs to be done before the next group meeting, but concluded that we can call a group meeting or smaller meetings with only a couple group members, in the meantime, if needed.
- Discussed our thoughts and concerns for A1

#### Next steps/Action Items:

- Each teammate will begin work on their first subtask.
- Get in contact with Alex to discuss some things related to the questionnaires.
- Begin working on the postmortem of A1.

#### Signed by:

- [x] Alan
- [x] Jeff
- [x] Lazar
- [x] Peter

---

### October 2nd:

#### Meeting Length:

1.75 hours

#### Attendees:

Lazar, Alan, Jeff, Peter

#### Agenda (ordered by priority):

- Present what each member did during the past week and if there are any questions or concerns (5 minutes)
- Combining all the starter codes from each member and establish the infrastructure (90 minutes)
- Create action items for the write-up.

#### Things that were done:

- Each team member walked through the start code they wrote.
- Decided on the folder structure and agree on the basic development environment setup.
  - One repo monolithic setup with 2 folders, one for frontend and one for backend
  - Set up linters and pre-commit script
- Created frontend folder
  - Used create react app
  - Modified the test and landing page to meet the assignment requirement
  - Created dockerfile for frontend
- Create backend folder
  - Implemented a simple HTTP server using express
  - Used Jest and supertest to create a mock API test
  - Modified the test and terminal message to meet the assignment requirement
  - Created dockerfile for backend
- Containerization
  - Created docker-compose file and test
  - Created docker-compose.prod.yml file for future usage
- CI/CD
  - Created GitHub action config file for testing and building both backend and frontend
  - Connected the repo to Heroku and create the config file and env var accordingly
  - Connected the repo to Netlify and configuration turning.
- Created 3 scripts for installing dependencies, running the project, testing the project.

#### Next steps/Action Items:

- Finished the report and other write-ups.
- Double-check the project to make sure everything works fine.
- Create proper docs for the project and submit the assignment.

#### Signed by:

- [x] Alan
- [x] Jeff
- [x] Lazar
- [x] Peter

---

### September 28th:

#### Meeting Length:

1.25 hours

#### Attendees:

Lazar, Alan, Jeff, Peter

#### Agenda (ordered by priority):

- Present what each member did during the past week and if there are any questions or concerns (8-10 minutes)
- See if we need to make any changes to the chosen tech stack (10 minutes)
- Begin the project plan document (30 minutes)
- Round off the tech stack document (10 minutes)

#### Things that were done:

- Professor agreed to let us select the Questionnaire Parajuniper project during the lecture on September 27th
- We created an architecture diagram on dragrams.net
  - During the process, we revisited the tech stack options we decided to check if they are suitable for the new project
  - We decided that a database is not a necessity
  - We also decided that it is more favorable to containerize frontend and backend separately and use Docker Compose to connect them than to contain the entire app in one Docker image
- Explored various UI libraries and the pros and cons of reach. The ones we looked at were:
  - Material UI
  - Ant Design
  - Chakra UI
  - We are leaning towards using Material UI
- Completed project development plan
  - We created 4 milestones for this project and separate the workload for each milestone

#### Next steps/Action Items:

- Polish tech stack document
- Prepare for TA meeting on Thursday
- Begin working on first milestone

#### Signed by:

- [x] Alan
- [x] Jeff
- [x] Lazar
- [x] Peter

---

### September 26th:

#### Meeting Length:

1 hour

#### Attendees:

Lazar, Alan, Jeff, Peter

#### Agenda (ordered by priority):

- Discuss the design of etherpad-like collaborative text-editor (40 minutes)
- Choose alternative project (10 minutes)
- Figure out the stack of CI/CD tools (10 minutes)

#### Things that were done:

- We discussed the design of the collaborative text-editor and figured out that there are two major issues that needed a deep dive.
  - Specifically, the issues raised from consistency in synchronization (commutativity and idempotency) and requirement of real-time collaboration with low latency.
  - We will have to use a CRDT (Conflict-free replicated data type) and Peer to Peer architecture to achieve lower latency and real-time collaboration.
  - We estimated that it would at least 50 hours per person to finish the project at an “instructional” level
- We also had some quick discussions on other alternatives such as the third Parajuniper project. It fits our tech stack nicely and is clear on its scope.
- For CI/CD tools, we decided to use Github Actions because the project requires us to submit a github repo, so GitHub Action has the benefit of integrity.

#### Next steps/Action Items:

- Wait for professor’s response to new project request
- Research on the rest of the alternatives

#### Signed by:

- [x] Alan
- [x] Jeff
- [x] Lazar
- [x] Peter

---

### September 20th:

#### Meeting Length:

45 minutes

#### Attendees:

Lazar, Alan, Jeff, Peter

#### Agenda (ordered by priority):

- Decide which our top three choices for projects (15-20 minutes)
- Complete the team signup form (~5 minutes)

#### Things that were done:

- We looked at which of the Javascript projects we would be willing to do. Specifically, we looked at the text editor and the collaborative text editor projects.
- For the text editor project, we discussed a possible implementation for the “undo” action. We looked at the termit github project to get a basic understanding of how it works.
- In the end we decided that we would be willing to do the collaborative text editor because we had a better idea of what we would need to do and how we would be able to do it. We had doubts about the text editor project because we did not know what exactly needs to be done on top of the existing functions of termit, other than adding an “undo” action.
- The descriptions for the projects are all quite vague so we messaged the professor to inquire about getting more information.
- In the end we came up with the following order:
  1. Patient Questionnaire App
  1. Covid 19 reporting
  1. A collaborative text editor
- We will wait for further information about some of the projects and may make changes to the project preference order if needed.
- Finally, we completed the team signup form.

#### Next steps:

- Wait until we know what project we get to work on
- Continue working on the tech stack document

#### Signed by:

- [x] Alan
- [x] Jeff
- [x] Lazar
- [x] Peter

---

### September 19th:

#### Meeting Length:

1 hour

#### Attendees:

Lazar, Alan, Jeff, Peter

#### Pre-meeting:

- Go through the assignment 1 instructions

#### Agenda items:

- Ice breaking, self introduction
- Assignment discussion (concerns & questions)
- Project choosing
- Tech stack choosing

#### Things that were done:

- Project choosing
  - Everyone in the team prefers the Parajuniper Projects over the Javascript Projects
  - The team ranked the 4 Parajuniper Projects as follows:
    1. Patient Questionnaire App
    2. Covid-19 Reporting
    3. Retrieving Patient Data
    4. A Library for Guidelines
- Tech Stack choosing
  - Discussed which frameworks and technologies team members have experience with and would be willing to work with
  - The team settled with the following:
    - Container: Docker
    - Frontend: React + Redux + UI libraries
    - Backend: Express
    - Testing: Jest
- Created repo for the team
- Created Google drive folder for written documents
- Organized ourselves and documents for beginning to work on assignment 1

#### Action items:

- Figure out how to choose project topics next week (ask Mike during lecture)
- Finish write up and update repo (copy google docs into repo in markdown)
  - The team will work on writing the description and decision process of the tech stack until next meeting:
    - Container: Alan
    - Frontend: Jefferson
    - Backend: Peter
    - Testing: Lazar
- Create a starter app after the write up is done

#### Signed by:

- [x] Alan
- [x] Jeff
- [x] Lazar
- [x] Peter

---
