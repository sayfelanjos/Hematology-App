FROM node:18.14.2

WORKDIR /shell-mf

COPY package.json .

RUN npm install -g npm@latest && npm install

COPY . .

EXPOSE 3000 9230

CMD ["npm", "run", "dev"]