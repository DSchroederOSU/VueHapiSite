'use strict';
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Sarahs_Cards', { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
        'cors': true
    }
});

const routes = require('../router/routes');

server.route(routes);

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
