<h1 align="center">Parajuniper Project #1: Patient Questionnaire App</h1>
<h2 align="center">Team JAPL</h2>

<br/>

A web app which renders a JSON FHIR Questionnaire and submits the user response using a standardized FHIR API to an Open Source FHIR EndPoint (HAPI FHIR).

<br/>

## Documentation and notes
The following documents are located in the [`/documents-and-notes/`](documents-and-notes/) directory of this repo:
-  Meeting notes (Ongoing)
-  Preliminary project development plan (A1)
-  Description of the tech stack (A1)
-  Features outline document (A2)
-  Progress document (A2)

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
