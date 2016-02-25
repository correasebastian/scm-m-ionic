'use strict';

describe('module: tabs, controller: TabsDebugCtrl', function () {

  // load the controller's module
  beforeEach(module('tabs'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var TabsDebugCtrl;
  beforeEach(inject(function ($controller) {
    TabsDebugCtrl = $controller('TabsDebugCtrl');
  }));

  describe('.grade()', function () {

    it('should classify asd as weak', function () {
      TabsDebugCtrl.password.input = 'asd';
      TabsDebugCtrl.grade();
      expect(TabsDebugCtrl.password.strength).toEqual('weak');
    });

    it('should classify asdf as medium', function () {
      TabsDebugCtrl.password.input = 'asdf';
      TabsDebugCtrl.grade();
      expect(TabsDebugCtrl.password.strength).toEqual('medium');
    });

    it('should classify asdfasdfasdf as strong', function () {
      TabsDebugCtrl.password.input = 'asdfasdfasdf';
      TabsDebugCtrl.grade();
      expect(TabsDebugCtrl.password.strength).toEqual('strong');
    });
  });

});
