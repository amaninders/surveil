# surveil
![Logo](./client/public/images/cover.png)
A web app and browser extension to track productivity based on browser network activity.

## Getting Started
1. Install dependencies: `npm install`
2. Create `api/.env` using `api/.env.example` as reference: `cp api/.env.example api/.env`
3. Update `.env` with correct information.
4. Create `src/db/config.json` using `src/db/config.example.json` as reference: `cp src/db/config.example.json src/db/config.json`
5. Update `src/db/config.json` with correct information.
6. (Re)create database tables (!!WARNING!! - this will remove existing rows): `npm run db:reset`
7. (optional) Seed database: `npm run db:seed`

## Dependencies
- Node v15.14.0+
- dotenv
- cookie-parser
- express
- express-jwt
- jsonwebtoken
- pg
- sequelize
