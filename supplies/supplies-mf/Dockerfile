FROM node:18.14.2

WORKDIR /supplies-mf

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3002/tcp

CMD ["npm", "run", "start"]