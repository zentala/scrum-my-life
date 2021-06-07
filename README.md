# Scrum My Life 🚀  
[![GitHub issues](https://img.shields.io/github/issues/zentala/scrum-my-life.svg)](https://github.com/alan345/naperg/issues)
[![GitHub forks](https://img.shields.io/github/forks/zentala/scrum-my-life.svg)](https://github.com/alan345/naperg/network)
[![GitHub stars](https://img.shields.io/github/stars/zentala/scrum-my-life.svg)](https://github.com/alan345/naperg/stargazers)
[![GitHub license](https://img.shields.io/github/license/zentala/scrum-my-life.svg)](https://github.com/alan345/naperg/blob/master/LICENSE)
![price](https://img.shields.io/badge/Price-Free-green.svg)

## Overview
Personal tasks, projects & habits management app concept. In development. 

## Development introduction
Based on [NAPREG Boilerplate](https://github.com/alan345/naperg) (Node, Apollo, Prisma, Express, React, GraphQL).

[![Tutorial Naperg](https://user-images.githubusercontent.com/15246526/109461303-c8b36000-7a16-11eb-88b0-fcf8a6d02209.png)](https://www.youtube.com/watch?v=KhDNp8Aw3HM)

### Features

- **Scalable GraphQL server:** The server uses [`apollo-server`](https://www.apollographql.com/docs/apollo-server/)
- **Pre-configured Apollo Client:** The project comes with a preconfigured setup for Apollo Client
- **Tooling**: Out-of-the-box support for [GraphQL Playground](https://github.com/prisma/graphql-playground)
- **Extensible**: Simple and flexible data model – easy to adjust and extend
- **Search with GraphQL**: Example to search in 2 fields for the users: Email and name
- **Signup management**:
  - Check password strength

For a fully-fledged **React & Apollo tutorial**, visit [How to GraphQL](https://www.howtographql.com/react-apollo/0-introduction/).

### Made with..

Typescript (https://www.typescriptlang.org/) for the Frontend and the Backend

Frontend:

- User interfaces: React https://reactjs.org/
- Design: material-ui-next https://material-ui.com/
- GraphQL tool: Apollo Client https://www.apollographql.com/

Backend:

- Server JS: ExpressJs https://expressjs.com/
- Server GraphQL: https://www.apollographql.com/docs/apollo-server/)
- ORM (object-relational mapping): Prisma https://www.prisma.io/
- Database sqlite: https://www.sqlite.org/index.html. You can replace by the database you want (PostgreSQL - MySQL - SQLite - SQL Server). Check the prisma documentation https://www.prisma.io/docs/concepts/

## Getting started

#### 1. Clone the repo to your computer

```
git clone https://github.com/zentala/scrum-my-life/
```

#### 2. Go the the repo

```
cd scrum-my-life
```

## Server

#### 1. Install the server - # Prisma & Graphql (port 4000)

```
cd server
yarn
```

#### 2. migrate the database with `Prisma migrate` run:

More info if needed: [`Prisma Migrate`](https://www.prisma.io/docs/concepts/components/prisma-migrate)

```
npx prisma migrate dev
```

Pick a name for your first migration. Example "init"

```
> npx prisma migrate dev
Prisma schema loaded from prisma/schema.prisma
Datasource "db": SQLite database "dev.db" at "file:./dev.db"

SQLite database dev.db created at file:./dev.db

✔ Name of migration … init
The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20210227221806_init/
    └─ migration.sql

✔ Generated Prisma Client (2.17.0) to ./node_modules/@prisma/client in 71ms

Everything is now in sync.
```

To reset your database if needed, use Prisma Reset.

More info if needed: [`Prisma Reset`](https://www.prisma.io/docs/concepts/components/prisma-migrate#do-not-edit-or-delete-migrations-that-have-been-applied)

```
npx prisma migrate reset --preview-feature
```

#### 3. Seed your Database

More info if needed: [`Prisma Seed`](https://www.prisma.io/docs/guides/application-lifecycle/seed-database/)

```
npx prisma db seed --preview-feature
```

A new user will be created from [`seed.ts`](https://github.com/alan345/naperg/blob/master/server/prisma/seed.ts#L6-L14) file.

- login: `admin@naperg.com`
- pass: `admin`
- role: `ADMIN`

#### 4. Check you databse with Prisma Studio

More info if needed: [`Prisma Studio`](https://www.prisma.io/docs/concepts/components/prisma-studio)

```
$ npx prisma studio
```

![image](https://user-images.githubusercontent.com/15246526/109402305-b4ce0800-7909-11eb-88d7-924e4db3d74f.png)

#### 5. Generate the prisma client

Prisma Client is an auto-generated database client that's tailored to your database schema.

More info if needed: [`Prisma Generate`](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client)

```
npx prisma generate
```

#### 6. Start the server (http://localhost:4000)

```
yarn start
```

## Frontend

#### 1. Install the frontEnd - ReactJs (port 3000). In a new terminal run:

```sh
cd react
yarn
```

#### 2. Start the frontend.

```
yarn start
```

#### 3. Go to url: http://localhost:3000

#### 4. Log in to the app with whis Admin User:

- login: `admin@naperg.com`
- pass: `admin`
- role: `ADMIN`
