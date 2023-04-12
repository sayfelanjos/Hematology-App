FROM node:18.14.2

WORKDIR /contracts-ms

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4006/tcp

CMD ["npm", "run", "start:dev"]