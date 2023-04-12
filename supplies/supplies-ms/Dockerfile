FROM node:18.14.2

WORKDIR /supplies-ms

COPY package.json /supplies-ms

RUN npm install

COPY . /supplies-ms

EXPOSE 4002/tcp

CMD ["npm", "run", "start:dev"]