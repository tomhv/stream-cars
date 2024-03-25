FROM node:alpine AS base
WORKDIR /srv/app
COPY . .

FROM base AS dev
RUN yarn install
CMD yarn run dev
