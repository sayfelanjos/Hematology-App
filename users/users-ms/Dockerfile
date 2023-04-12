FROM node

WORKDIR /users-ms

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4007/tcp

ENTRYPOINT ["npm", "run", "start:dev"]