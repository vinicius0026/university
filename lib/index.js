const Hapi = require('hapi');

const pkg = require('../package.json');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    path: '/version',
    method: 'GET',
    handler: (request, reply) => {
        reply({version: pkg.version});
    }
});

server.start(() => {});


