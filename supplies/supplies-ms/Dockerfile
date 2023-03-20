FROM node:18.14.2

WORKDIR /supplies-ms

COPY package.json /supplies-ms

RUN npm install -g npm@9.6.0 && npm install

COPY . /supplies-ms

EXPOSE 4001

CMD ["npm", "run", "start:dev"]