FROM node:18.14.2

WORKDIR /customers-and-suppliers-ms

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4001/tcp

ENTRYPOINT ["npm", "run", "start:dev"]