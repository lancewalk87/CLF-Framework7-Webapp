// landingPage : View
function landingView(controller) {
  function load(page) {
    User Navigation
    page.find('#login-btn').on('click', function(e) {
      controller.login();
    });
    
    page.find('#register-btn').on('click', function(e) {
      controller.register();
    });
  }
  return {
    load: load
  };
}
// End landingPage : View
module.exports = landingView;
