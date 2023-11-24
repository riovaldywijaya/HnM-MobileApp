FROM node:16.13

WORKDIR /usr/local/app

ENV PORT=4002

ENV NODE_ENV=production

COPY package.json package-lock.json /usr/local/app/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]