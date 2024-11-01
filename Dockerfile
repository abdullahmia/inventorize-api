FROM node:20-alpine

WORKDIR /app

COPY ./src ./src

RUN npm install