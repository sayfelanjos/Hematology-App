FROM node:18.14.2

WORKDIR /global-store

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3008/tcp

CMD ["npm", "run", "start"]