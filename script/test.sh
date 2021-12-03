#!/bin/sh
sudo docker-compose -f docker-compose.yml run backend npm run test
sudo docker-compose -f docker-compose.yml run frontend npm run test
