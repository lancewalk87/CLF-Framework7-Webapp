// APPLICATION VIEW CONTROLS
var refresh;
function navigationService(router) {
  // Page Navigation Methods
  // function loadPage(pageName, query) {  // Load: Page
  //   router.load({url: pageName+'.html', query: query});
  //   console.log('navigationService.loadPage('+pageName+', '+query+')');
  // }
  //
  // function back(pageName, query) {  // Load: Previous Page
  //   if (pageName) { router.back({url: pageName + '.html', force: true, query: query});
  //   } else { router.back(); }
  //   console.log('navigationService.back('+pageName+','+ query+')');
  // }

  function loadPage(pageName, query) {
    console.log("loading page", pageName);
    router.load({url: pageName + '.html', query: query});
  }

  function back(pageName, query) {
    if(pageName) {
      router.back({url: pageName + '.html', force: true, query: query});
    } else {
      router.back();
    }
  }
  // End Page Navigation Methods
  return {
    loadPage: loadPage,
    back: back
  };
}
module.exports = navigationService;
// END APPLICATION VIEW CONTROLS
