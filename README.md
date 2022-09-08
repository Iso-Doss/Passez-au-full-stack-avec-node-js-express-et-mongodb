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

Choose the port your API is running on, and click TEST ROUTES to test your API.

## Schema ##

```
mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true }
})
```
