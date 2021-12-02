<h1 align="center">Parajuniper Project #1: Patient Questionnaire App</h1>
<h2 align="center">Team JAPL</h2>

<br/>

A web app which renders a JSON FHIR Questionnaire and submits the user response using a standardized FHIR API to an Open Source FHIR EndPoint (HAPI FHIR).

<br/>

## Documentation and notes
The following documents are located in the [`/documents-and-notes/`](documents-and-notes/) directory of this repo:
-  [Meeting notes](documents-and-notes/meeting-notes.md) (Ongoing)
-  [Preliminary project development plan](documents-and-notes/project-dev-plan.md) (A1)
-  [Description of the tech stack](documents-and-notes/tech-stack.md) (A1)
-  [Features outline document](documents-and-notes/features.md) (A2)
-  [A1 postmortem](documents-and-notes/a1-postmortem.md) (A2)
-  [Progress document](documents-and-notes/progress.md) (A2)
-  [A2 retrospective](documents-and-notes/a2-retrospective.md) (A3)
-  [Feature Overview](documents-and-notes/feature-overview.md) (A3)

<br/>

## Instructions and commands to install, build & run, and test

- Ensure that you have a linux system.
- Install git with `sudo apt install git` and clone this repo.

### Install docker & docker compose

```bash
chmod +x ./script/bootstrap.sh && ./script/bootstrap.sh
```

### Build docker container and run

```bash
sudo docker-compose up --build
```

Go to [http://localhost:3000](http://localhost:3000) in your browser to view the web app

### Run tests

```bash
chmod +x ./script/test.sh && ./script/test.sh
```


## Validation and Acceptance Criteria

The following validation and acceptance criteria was agreed to with our industry partner Alex:
- A questionnaire should be rendered accurately.
- The user response should be captured and sent to the FHIR endpoint.

Smaller, more specific acceptance criteria were set out by us for each feature of the project. We also consulted Alex as we created them. These can be found in the various feature documents listed above.

The verification of the general criteria that was agreed to with our industry partner is demonstrated through the frontend and backend testing suites in our project. The tests can be run with one command as mentioned above. The criteria can also be verified by visiting the webpage and viewing the questionnaire, as well as filling it out. The console, for both the frontend and backend, can be checked for log output.

Tests can be found here:
- [Backend tests](backend/__tests__/app.test.js)
- [Frontend tests](frontend/src/App.test.js)