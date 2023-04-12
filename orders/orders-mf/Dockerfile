FROM node:18.14.2

WORKDIR /orders-mf

COPY package.json .

RUN npm install -g npm@latest && npm install

COPY . .

EXPOSE 3004/tcp

CMD ["npm", "run", "start"]