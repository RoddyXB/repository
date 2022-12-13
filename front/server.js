const next = require('next');
const express = require('express');
const config = require('./config/default');
require('dotenv').config()
const bodyParser = require("body-parser");
var http = require('http');
const Next_app = next({ dev:true });
const handler = Next_app.getRequestHandler(Next_app);
Next_app.prepare()
    .then(async () => {
        const app = express();
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });
 
        app.use(bodyParser.json({ limit: '100mb' })); // soporte para bodies codificados en jsonsupport
        app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' })); // soporte para bodies codificados
        app.get('*', (req, res) => { return handler(req, res); });

        http.createServer(app).listen(config.port_web, function(){
            console.log(`> Listo en http://localhost:${config.port_web}`);
         });

    })

