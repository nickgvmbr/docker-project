FROM node:carbon

COPY . /app
WORKDIR /app
EXPOSE 8080
RUN npm i

CMD ["npm", "start"]
