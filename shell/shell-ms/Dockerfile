FROM node:18.14.2

WORKDIR /shell-ms

COPY package.json /shell-ms

RUN npm install -g npm@latest && npm install

COPY . /shell-ms

EXPOSE 3001

CMD ["npm", "run", "start:dev"]