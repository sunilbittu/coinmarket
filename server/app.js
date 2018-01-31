var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app;
var openHttpConnections = {};
var httpServer;

var path = require('path');

initApp();

function initApp() {
    app = express();
    // parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

	// parse application/json
	app.use(bodyParser.json({ limit: "50mb" }));


	app.use(express.static(path.join(__dirname, '../node_modules')));

    app.use('/client', express.static(path.join(__dirname, '../client')));
    
    httpServer = http.Server(app);

	httpServer.on('connection', function(conn) {
		var key = conn.remoteAddress + ':' + (conn.remotePort || '');

		openHttpConnections[key] = conn;

		conn.on('close', function() {
			delete openHttpConnections[key];
		});
    });
    
    for (key in openHttpConnections) {
        openHttpConnections[key].destroy();
    }
}

module.exports = app;