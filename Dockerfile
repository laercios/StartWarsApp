FROM node:13.10-alpine

WORKDIR /app

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock

RUN yarn global add @vue/cli
RUN yarn install