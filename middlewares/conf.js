var config = require('../config');

exports.github = function (req, res, next) {
  if (config.GITHUB_OAUTH.clientID === '10bc2d61fd3052100f04') {
    return res.send('call the admin to set github oauth.');
  }
  next();
};
