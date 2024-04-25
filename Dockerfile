FROM node:20-bookworm
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .

RUN yarn install

EXPOSE 3000:3000
CMD yarn build:run
