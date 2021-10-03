<h1 align="center">Parajuniper Project #1: Patient Questionnaire App</h1>
<h2 align="center">Team JAPL</h2>

<br/><br/>

## Documentation and notes
Our preliminary project development plan, description of the tech stack, and meeting notes are all located in the `/documents-and-notes/` directory of this repo. 

<br/><br/>

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
sudo docker-compose -f docker-compose.yml run backend npm run test && sudo docker-compose -f docker-compose.yml run frontend npm run test
```
