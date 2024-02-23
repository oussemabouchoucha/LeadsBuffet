FROM node

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --save-dev @angular/cli
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

CMD ["npm", "run", "start"]

