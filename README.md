Install docker & docker compose

```bash
chmod +x ./script/bootstrap.sh && ./script/bootstrap.sh
```

Build docker container and run

```bash
docker-compose up --build
```

Run tests

```bash
docker-compose -f docker-compose.yml run backend npm run test && docker-compose -f docker-compose.yml run backend npm run test
```
