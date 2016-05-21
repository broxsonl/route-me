'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const request = chai.request;
const server = require('../lib/server');

server.init();

describe('HTTP server', function () {
///Make/inject a handlers file with get, post, destroy put

  it('respond to a GET request on default route /', function (done) {
    request('localhost:3000')
      .get('/')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('GET request to homepage received');
        done();
      });
  });

  it('respond to a POST request on default route /', function (done) {
    request('localhost:3000')
      .post('/')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('POST request to homepage received');
        done();
      });
  });

  it('respond to a DELETE request on default route /', function (done) {
    request('localhost:3000')
      .delete('/')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('DELETE request to homepage received');
        done();
      });
  });

  it('respond to a PUT request on default route /', function (done) {
    request('localhost:3000')
      .put('/')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('PUT request to homepage received');
        done();
      });
  });

  it('respond with 404 to an invalid route', function (done) {
    request('localhost:3000')
      .get('/dfs')
      .end(function (err, res) {
        expect(res).to.have.status(404);
        expect(res.text).to.eql('Error: Not found');
        done();
      });
  });

  //check badrequest
  it('respond with 400 if an invalid request is made', function (done) {
    request('localhost:3000')
      .patch('/')
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.text).to.eql('Error: Bad Request');
        done();
      });
  });


});
