FROM node:18.14.2

WORKDIR /statistics-ms

COPY package.json /statistics-ms

RUN npm install

COPY . .

EXPOSE 4005/tcp

CMD ["npm", "run", "start:dev"]