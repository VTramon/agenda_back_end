FROM node:alpine

WORKDIR /usr/app

COPY package.json tsconfig.json yarn.lock .gitignore ./
COPY src ./
COPY prisma ./

ENV DATABASE_URL="postgresql://admin:mysecretpassword@localhost:5432/agenda?schema=public"

RUN yarn
CMD [ "yarn", "dev" ]

EXPOSE 4000