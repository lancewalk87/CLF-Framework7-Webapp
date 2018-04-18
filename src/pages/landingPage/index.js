var landingView = require('./view');
var landingController = require('./controller');

module.exports = function (navService, sessionService) {
  return landingView(landingController(navService, sessionService));
};
