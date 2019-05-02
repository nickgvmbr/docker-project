FROM node:carbon

COPY . /app
WORKDIR /app
EXPOSE 3030
RUN npm i

CMD ["npm", "start"]
