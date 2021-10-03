# Meeting Notes

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
- [ ] Peter

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
- [ ] Peter

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
- [ ] Peter

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
- [ ] Peter

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
- [ ] Peter

---
