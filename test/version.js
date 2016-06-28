'use strict';

const Code = require('code');
const Lab = require('lab');

const Package = require('../package.json');
const University = require('../lib/');

const expect = Code.expect;
const lab = exports.lab = Lab.script();

lab.experiment('Version tests', () => {

    lab.test('should return correct version', (done) => {

        University.init(0, (err, server) => {

            expect(err).to.not.exist();

            server.inject('/version', (res) => {

                expect(res.statusCode).to.equal(200);
                expect(res.result)
                    .to.equal({ version: Package.version });
                server.stop(done);
            });
        });
    });
});
