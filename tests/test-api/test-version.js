/* globals describe, it */
'use strict'

const expect = require('chai').expect
const api = require('../../src/http-api')

describe('version', function () {
  it('get the version', done => {
    api.server.inject({
      method: 'GET',
      url: '/api/v0/version'
    }, res => {
      expect(res.result).to.equal('0.4.0-dev')
      done()
    })
  })
})