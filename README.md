# Expenses tracker from SQL Server

This project is about creating, reading, and manipulating data from SQL database. Front as React and maybe React Native.

## ENV file

-  Copy .env.example to .env and fill with your data.

## Structure

The project is divided into two main folders:

1. `server`: This folder contains the Express server that handles the API requests from SQL.
2. `client`: This folder contains the React application that interacts with the server.

## Server

The server is built with Express.js, SQL and provides the following endpoints:

-  `GET /api/exp_all`: Fetches all expenses from the database.
-  `DELETE /api/exp/:id`: Deletes a expense with the specified ID from the database.
-  `POST /api/exp`: Adds a new expense to the database.
-  `PUT /api/exp/:id`: Updates the expense with the specified ID in the database.

You can import "exp_DB.sql" file from "./server/src/db" to your database and test it locally.

## Client

The client is a React application that provides a user interface for interacting with the server's endpoints. It allows you to view all expenses, delete a expenses, add a new expense and update a expenses's information.

## Installation

To install the application, follow these steps:

1. Clone the repository.
2. Navigate to the `server` folder and run `npm install` to install the server dependencies.
3. Navigate to the `client` folder and run `npm install` to install the client dependencies.

## Running the Application

To run the application, follow these steps:

1. In the `server` folder, run `npm run dev` to start the server.
2. In the `client` folder, run `npm run dev` to start the client.

The client will be accessible at `http://localhost:5173`, and the server will run at `http://localhost:3000`.
