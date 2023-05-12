# Node JS Express Worldwide University Database

A database with universities from all over the world plus a list of countries.

This GitHub repository contains the NodeJS Express server for the Angular application located at https://github.com/paulo-bettencourt/worldwide-university-database.

The server is responsible for handling server-side logic and interacting with databases, and it is built using the minimal and flexible Express web application framework. The FE app uses several technologies, including Angular, TypeScript, Angular Material, RxJS, Bootstrap, and Firebase. This repository serves as a back-end component for the Worldwide University Database Angular app, providing a robust set of features for building web and mobile applications.

## Development server

Run `node server.js` for a dev server. The server will be hosted at `http://localhost:3000/`.

## Deployed version

You can make your `GET` requests of the universities at:

`https://blushing-jacket-foal.cyclic.app/` + `${country name param request}`

You can fetch `GET` all the countries in the world at:

`https://blushing-jacket-foal.cyclic.app/countries/api`

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ yarn install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build
