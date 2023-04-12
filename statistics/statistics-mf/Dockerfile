FROM node:18.14.2

WORKDIR /statistics-mf

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3005/tcp

ENTRYPOINT ["npm", "run", "start"]