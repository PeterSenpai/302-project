FROM node:14.17.6-alpine3.14 as prod

WORKDIR /usr/src/app/

COPY ./frontend/package.json ./frontend/

COPY ./backend/package.json ./backend/

COPY ./frontend/ ./frontend/

COPY ./backend/ ./backend/

RUN cd ./frontend/ && npm install && npm run build

RUN cd ./backend/ &&  npm install

