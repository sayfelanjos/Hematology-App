FROM node

WORKDIR /users-mf

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3007/tcp

CMD ["npm", "run", "start"]