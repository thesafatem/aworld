FROM node:14

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN npm install 

EXPOSE 3000

ENV PGUSER=admin PGPASSWORD=password PGDATABASE=aworld PGHOST=host.docker.internal

CMD ["node", "app.js"]