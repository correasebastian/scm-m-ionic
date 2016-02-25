'use strict';

describe('module: tabs, service: Tabs', function () {

  // load the service's module
  beforeEach(module('tabs'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Tabs;
  var $timeout;
  beforeEach(inject(function (_Tabs_, _$timeout_) {
    Tabs = _Tabs_;
    $timeout = _$timeout_;
  }));

  describe('.changeBriefly()', function () {
    beforeEach(function () {
      Tabs.changeBriefly();
    });
    it('should briefly change', function () {
      expect(Tabs.someData.binding).toEqual('Yeah this was changed');
      $timeout.flush();
      expect(Tabs.someData.binding).toEqual('Yes! Got that databinding working');
    });
  });

});
