'use strict';
angular.module('tabs')
.constant('TabsConfig', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://DEVSERVER/api'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});
