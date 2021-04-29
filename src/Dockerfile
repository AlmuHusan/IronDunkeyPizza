FROM mhart/alpine-node:8.11.4
WORKDIR /client/src
COPY package*.json /src/
RUN npm install
COPY . /src/
EXPOSE 3000
CMD ["npm", "start"]