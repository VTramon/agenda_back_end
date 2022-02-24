FROM node:16-slim

WORKDIR /usr/app

COPY package.json tsconfig.json yarn.lock .gitignore ./
COPY src ./
COPY prisma ./

ENV DATABASE_URL="postgresql://admin:mysecretpassword@localhost:5432/agenda?schema=public"
RUN apt-get -qy update && apt-get -qy install openssl
RUN yarn
RUN yarn prisma generate
CMD [ "yarn", "dev" ]

EXPOSE 4000