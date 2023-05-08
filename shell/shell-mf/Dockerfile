<<<<<<< HEAD
FROM node:18.14.2
=======
FROM node
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)

WORKDIR /shell-mf

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000/tcp

CMD ["npm", "run", "start"]