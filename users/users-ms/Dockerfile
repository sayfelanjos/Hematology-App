FROM node:18.14.2

WORKDIR /users-ms

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80/tcp

ENTRYPOINT ["npm", "run", "start"]