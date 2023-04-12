FROM node:18.14.2

WORKDIR /contracts-mf

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3006/tcp

CMD ["npm", "run", "start"]