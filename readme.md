# Inventorize Api

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This Inventory Management System API, built with Node.js, Express, and Sequelize, uses MySql as its database. It offers comprehensive features to manage users, roles, permissions, products, orders, and categories.

## Table of Contents

- [Inventorize Backend](#inventorize-backend)
  - [Table of Contents](#table-of-contents)
  - [Quick Start](#quick-start)
  - [Commands](#commands)
  - [Environment Variables](#environment-variables)
  - [Database Schema Design](#database-schema-design)
  - [API Documentation](#api-documentation)

## Quick Start

Clone the repo:

```bash
git clone https://github.com/abdullahmia/inventorize-api
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Commands

Running locally:

```bash
npm run dev
```

Running in production:

```bash
npm start
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Environment
NODE_ENV=development

# Port number
PORT=3000

# Database configuration
REMOTE_DATABASE_URL=mysql://root:root@db:3306
LOCAL_DATABASE_URL=mysql://root:root@db:3306
DATABASE_NAME=inventorize
DATABASE_USER=root
DATABASE_PASS=root

# JWT
ACCESS_TOKEN_SECRET=secret
REFRESH_TOKEN_SECRET=secret
ACCESS_TOKEN_EXPIRES_IN=1d
REFRESH_TOKEN_EXPIRES_IN=7d
```

# Database Schema Design

This section provides a visual representation of the database schema design used in this project.

![Database Schema](</docs/images/Schema-diagram(inventorize-app).jpeg>)

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:[PORT]/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.
