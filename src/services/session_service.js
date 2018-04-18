// APPLICATION SESSION CONTROL METHODS
function sessionService(currentSession) {
  // User Session Methods
  function saveSession(newSession) { // Save User Session
    currentSession = newSession;
    localStorage.currentSession = JSON.stringify(currentSession);
    localStorage.tempPage=null;
    console.log('sessionService.saveSession('+localStorage.currentSession+');');
  }
  
  function getSession() { // Get User Session
    if (!currentSession && localStorage.currentSession) { currentSession = JSON.parse(localStorage.currentSession); }
    console.log('sessionService.getSession()');
      return currentSession;
  }
  // End User Session Methods

  // User Session Temp Data: Page Controllers
  function setTemporaryPage(page) {
    localStorage.setItem('tempPage', page);
    console.log('sessionService.setTemporaryPage('+page+')');
  }

  function checkTemporaryPage(page) {
    return localStorage.tempPage;
  }

  function shouldResetPwd(shouldReset, userEmail) {
    if (shouldReset) {
      // save email: temp
      localStorage.setItem('shouldReset', shouldReset);
      localStorage.setItem('ResetEmail', userEmail);
    } else {
      localStorage.removeItem('ResetEmail');
      localStorage.removeItem('shouldReset');
    }
    var tempDat = localStorage.getItem("ResetEmail");
    console.log('sessionService.shouldResetPwd('+shouldReset+', '+userEmail+').tempDat: '+tempDat);
  }
  function shouldReset(shouldReset, userEmail) {
    localStorage.setItem('shouldReset', shouldReset);
    localStorage.setItem('ResetEmail', userEmail);
  }
  
  function checkReset() { return localStorage.setItem('shouldReset', shouldReset); }
  // app tour
  function shouldTour(role) { localStorage.setItem('shouldTour', role); }
  function terminateTour() { localStorage.removeItem('shouldTour'); }
  // End Session Temp Data: Session Intitializers
  return {
    // User Session Methods
    saveSession: saveSession,
    getSession: getSession,
    // User Session Temp Data
    setTemporaryPage: setTemporaryPage,
    checkTemporaryPage: checkTemporaryPage,
    shouldResetPwd: shouldResetPwd,
    checkReset: checkReset
  };
}
module.exports = sessionService;
// END APPLICATION SESSION CONTROL METHODS
