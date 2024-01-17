FROM node:16-alpine


WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

ENV CHOKIDAR_USEPOLLING=true

CMD ["yarn","start"]