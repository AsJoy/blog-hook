FROM node:9.11
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm run start:prod
