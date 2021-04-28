# node-rest-boilerplate

A simple boilerplate for Node RESTful APIs. Still a work in progress.

## Tech-stack

A brief overview of technologies and tools used in this boilerplate, 
and how to disable them.

### PM2

PM2 is a process management tool suitable for Node environments. I'll
take you to [their own webpage](https://pm2.keymetrics.io/) to learn more.

The project's process configuration can be found in the file `ecosystem.config.js`. 
If you don't want to use PM2, simply ignore/delete this file, as well as the dependency on
the `pm2` package:

`npm uninstall pm2`

### .env file

Configuration is done using the `.env` file. As a best practice, you should avoid including 
the `.env` file in the git repository (which I've done as well). So I made a `.env.sample` 
file to give you an overview of what environment variables can be set.

To process and set the environemnt variables, we use the generally accepted `dotenv` package.

### Sequelize + Postgres

I have used Sequelize as the ORM tool for this boilerplate. After installing it
globally, I intialized sequelize using `sequelize init` but changed the default 
setup a bit.

* I have moved the `models`, `migrations`, and `seeders` directories into the `src` directory.

* I have moved the `config` directory inside `src`, renamed the default configuration file
to `sequelize.js` and made some changes. Check the comments!

* I have created the `.sequelizerc` file which handles the changes in the default setup

### Docker

### Docker compose

### Gitlab CI/CD

### Unit testing: Mocha + Chai

### Express

### RabbitMQ