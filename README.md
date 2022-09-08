# Passez au Full Stack avec Node.js, Express et MongoDB Application - VendreMesObjets #

## Prerequisite ##

* npm

* node

## Installation ##

Clone this repo `git clone https://github.com/Iso-Doss/passez-au-full-stack-avec-node-js-express-et-mongodb`

[//]: # (Open the folder `cd passez-au-full-stack-avec-node-js-express-et-mongodb`)

And run `npm install` from within the project directory.

## Configure environment information ##

Duplicate the sample environment file `.env.example` to `.env`

Configure the environment file by filling in the values for the keys:

```
MONGOOSE_DB_USER='The username to connect to the Mongo DB database.'
MONGOOSE_DB_PASSWORD='The password to connect to the Mongo DB database.'
PORT='The port on which your application should start. Default is port 3000.'
```

## Using the app ##

Run `npm start` from within the project directory.

## Swagger Url ##

Swagger Url: `localhost:3000/api-docs`

## Endpoints Url ##

* Signup: `localhost:3000/api/auth/signup` (POST)

* Login: `localhost:3000/api/auth/login` (POST)

* Create stuff: `localhost:3000/api/stuff` (POST)

* Read a stuff: `localhost:3000/api/stuff/:stuffId` (GET)

* Read all stuff: `localhost:3000/api/stuff` (GET)

* Update stuff: `localhost:3000/api/stuff/:stuffId` (PUT)

* Delete stuff: `localhost:3000/api/stuff/:stuffId` (DELETE)

* Create product: `localhost:3000/api/products` (POST)

* Read a product: `localhost:3000/api/products/:stuffId` (GET)

* Read all product: `localhost:3000/api/products` (GET)

* Update product: `localhost:3000/api/products/:stuffId` (PUT)

* Delete product: `localhost:3000/api/products/:stuffId` (DELETE)
