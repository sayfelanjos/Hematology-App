FROM node:18.14.2

WORKDIR /invoices-mf

COPY package.json .

RUN npm install -g npm@latest && npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "start"]