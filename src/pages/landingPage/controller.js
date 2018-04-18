// landingPage : Controller
function landingController(navService, sessionService) {
  function login() {
    navService.loadPage('login');
    console.log('landingPage.controller.login()');
  }

  function register() {
    navService.loadPage('register');
    console.log('landingPage.controller.register()');
  }

  function checkSesssion() {
    var session = sessionService.getSession();
    console.log("SESSION IS "+JSON.stringify(session));
    if(session) {
      console.log('already logged in');
      navService.loadPage('sellerWall');
    }
  }

  return {
    login: login, register: register, checkSesssion: checkSesssion
  };
}
// End landingPage : Controller
module.exports = landingController;
