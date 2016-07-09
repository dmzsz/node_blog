var conf = require('../../middlewares/conf');
var config = require('../../config');

describe('test/middlewares/conf.test.js', function () {
  it('should alert no github oauth', function (done) {
    var _clientID = config.GITHUB_OAUTH.clientID;
    config.GITHUB_OAUTH.clientID = '10bc2d61fd3052100f04';
    conf.github({}, {send: function (str) {
      str.should.equal('call the admin to set github oauth.');
      config.GITHUB_OAUTH.clientID = _clientID;
      done();
    }});
  });
});
