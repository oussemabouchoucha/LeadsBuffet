FROM node
WORKDIR /usr/src/app
RUN npm cache clean --force
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install -g npm@latest
RUN npm install
COPY . .
RUN ng build 

EXPOSE 4200
CMD ["npm", "run", "start"]

