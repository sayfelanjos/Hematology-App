FROM node:18.14.2

WORKDIR /custumers-and-suppliers-mf

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001/tcp

CMD ["npm", "run", "start"]