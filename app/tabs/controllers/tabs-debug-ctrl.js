'use strict';
angular.module('tabs')
.controller('TabsDebugCtrl', function ($log, Tabs, TabsConfig, $cordovaDevice) {

  $log.log('Hello from your Controller: TabsDebugCtrl in module tabs:. This is your controller:', this);

  // bind data from services
  this.someData = Tabs.someData;
  this.ENV = TabsConfig.ENV;
  this.BUILD = TabsConfig.BUILD;
  // get device info
  ionic.Platform.ready(function () {
    if (ionic.Platform.isWebView()) {
      this.device = $cordovaDevice.getDevice();
    }
  }.bind(this));

  // PASSWORD EXAMPLE
  this.password = {
    input: '', // by user
    strength: ''
  };
  this.grade = function () {
    var size = this.password.input.length;
    if (size > 8) {
      this.password.strength = 'strong';
    } else if (size > 3) {
      this.password.strength = 'medium';
    } else {
      this.password.strength = 'weak';
    }
  };
  this.grade();

});
