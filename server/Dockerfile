FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm i -g @nestjs/cli
RUN npm install --save-dev webpack
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "start:dev" ]