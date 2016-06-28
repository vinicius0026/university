'use strict';

// Load modules

const Hapi = require('hapi');
const Hoek = require('hoek');
const Version = require('./version');


// Declare internals

const internals = {};


exports.init = function (port, callback) {

    const server = new Hapi.Server();
    server.connection({ port: port });
    server.register(Version, (err) => {

        Hoek.assert(!err, err);
        server.start((err) => {

            Hoek.assert(!err, err);
            return callback(err, server);
        });
    });
};

