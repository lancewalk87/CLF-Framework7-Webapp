// Global dependencies
require('framework7');
if (PLATFORM === 'material') { require('./material.less');
} else { require('./ios.less'); }
require('es6-promise').polyfill();
// Application Views
var landingPage = require('./pages/landingPage');
var loginPage = require('./pages/login');
var registerPage = require('./pages/register');
var buyerWall = require('./pages/buyerWall');
var sellerWall = require('./pages/sellerWall');
var postStudio = require('./pages/postStudio');
var accountPage = require('./pages/accountPage');
var publicPage = require('./pages/publicPage');
// Services
var httpService = require('./services/http_service');
var navigationService = require('./services/navigation_service');
var sessionService = require('./services/session_service');
var nativeExtensions = require('./services/native_extensions');
// Resources

var f7App = new Framework7({
  pushState: true,
  cache: false,
});

f7App.initPullToRefresh();
var mainView = f7App.addView('.view-main', {
  main: true
});

var http = httpService(Dom7);
var nativeExt = nativeExtensions(f7App.device);
var sessionSvc = sessionService();
var navService = navigationService(mainView.router);

var session = sessionSvc.getSession();
if(session && session.token && session.user) {
  mainView.router.loadPage('sellerWall.html');
} else {
  mainView.router.back({url: 'landingPage.html', force: true});
}

var feedService = require('./services/feed_service');
var feedSvc = feedService('ws://199.58.187.114:3000/app');

// Application View Intializers
  // Main
f7App.onPageInit('landingPage', function(page) { landingPage(navService, sessionSvc).load(Dom7(page.container)); });

console.log('(index.js: appInitialization:'+'\n'+
  '   --PLATFORM: '+PLATFORM+'\n'+
  '   --f7App: '+f7App.device+'\n'+
  '   --mainView: '+mainView.params.linksView+'\n'+
  '   --userSession.user: '+JSON.stringify(session.user)+'\n'+
'shopterIntialized)'+'\n\n');
