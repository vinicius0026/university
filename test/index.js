'use strict';

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');

const University = require('../lib/');

const expect = Code.expect;
const lab = exports.lab = Lab.script();

lab.experiment('index tests', () => {

    lab.test('should export init', (done) => {

        University.init(0, (err, server) => {

            expect(err).to.not.exist();
            expect(server).to.be.instanceof(Hapi.Server);
            server.stop(done);
        });
    });
});
