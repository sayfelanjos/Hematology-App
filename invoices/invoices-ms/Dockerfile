FROM node:18.14.2

WORKDIR /invoices-ms

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4003/tcp

ENTRYPOINT ["npm", "run", "start:dev"]