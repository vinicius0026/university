'use strict';

const Server = require('./index');

Server.init(8000, (err, server) => {

    if (err) {
        return console.error(err);
    }

    console.log('Server started at: ' + server.info.uri);
});
