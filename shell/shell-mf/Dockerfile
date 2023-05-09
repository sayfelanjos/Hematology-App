FROM node:18.14.2

WORKDIR /shell-mf

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000/tcp

CMD ["npm", "run", "start"]