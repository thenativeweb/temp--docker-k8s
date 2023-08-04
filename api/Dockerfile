FROM node:20.5.0-alpine3.18 AS base

USER node
WORKDIR /home/node

ADD --chown=node:node ./package.json .
ADD --chown=node:node ./package-lock.json .



FROM base AS builder

RUN npm install

ADD --chown=node:node . .

RUN npx tsc



FROM base

RUN npm install --omit=dev

ADD --chown=node:node ./messages.txt .
COPY --from=builder --chown=node:node /home/node/dist ./dist

CMD [ "node", "dist/app.js" ]
