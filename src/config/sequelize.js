//The original sequelize configuration file is 
// a json file, not js. But we can change it into
// a js script file, so we can require the dotenv module and
// set the environment variables.

//Besides, you may see that we are using the same 
// configuration for all environments (dev, test, prod). 
// You are free to change them. In my case, the environment
// variables handle the DB behaviour and are set 
// for each environment, so I didn't need to 
// set them separately.

require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.BP_DB_USER,
    "password": process.env.BP_DB_PASS,
    "database": process.env.BP_DB_DB,
    "host": process.env.BP_DB_HOST,
    "dialect": "postgres",
    "logging": false
  },
  "test": {
    "username": process.env.BP_DB_USER,
    "password": process.env.BP_DB_PASS,
    "database": process.env.BP_DB_DB,
    "host": process.env.BP_DB_HOST,
    "dialect": "postgres",
    "logging": false
  },
  "production": {
    "username": process.env.BP_DB_USER,
    "password": process.env.BP_DB_PASS,
    "database": process.env.BP_DB_DB,
    "host": process.env.BP_DB_HOST,
    "dialect": "postgres",
    "logging": false
  }
}
