# RateMyHousing

RateMyHousing is a platform designed to assist UMass students in finding housing options efficiently.

## Getting Started - Client

1. Navigate to the `rate-my-housing` subdirectory.
2. Run `npm install` to install dependencies.
3. Execute `npm run dev` to start the local Next.js server for the client-side application.
4. Go to `http://localhost:3000/` after the Server setup below is complete

## Getting Started - Server

1. Go to the `server` directory.
2. Use `npm install` to install server dependencies.
3. Create a `.env` file and assign local postgres database parameters: `POSTGRESQL_DB_HOST`, `POSTGRESQL_DB_USER`, `POSTGRESQL_DB_PASSWORD`, `POSTGRESQL_DB`, `POSTGRESQL_DB_PORT`
4. Run `node all.model.make.js` to create database tables
5. Run `npm run dev` to start the server-side application.

## Usage

Users can:
- Search for available housing options based on preferences.
- View ratings and reviews for different accommodations.
- Add their own ratings, reviews, and listings

## Features

- Search functionality based on listing data.
- Rating system for user-generated feedback on housing options.
- Upload new listings to the platform.
