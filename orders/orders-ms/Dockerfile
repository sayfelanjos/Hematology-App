FROM node:18.14.2

WORKDIR /orders-ms

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4004/tcp

ENTRYPOINT ["npm", "run", "start:dev"]