"use strict";

const https = require("http"),
      express = require("express"),
      helmet = require('helmet'),
      bodyParser = require('body-parser'),
      compression = require('compression'),
      app = express();

//Include express middleware
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'https://publishesbot.com');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', '*');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

//Config File
const {Server} = require("./config.api.js");

//Load Routes the server
const routes = require("./app/Router");

//Create server
const serverHttps = https.createServer(app);

//Call routes
new routes(app);

    //UP server
    serverHttps.listen(Server.port,(err)=>{
        if(err){
            return console.log(`Ocurrio algun error al ejecutar el servidor. Mas detallado: ${err}`);
        }
        console.log(`Server on ${Server.port}`)
    });
