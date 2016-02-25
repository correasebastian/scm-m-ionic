'use strict';
angular.module('main', [
        'ionic',
        'ngCordova',
        'ui.router',
        // TODO: load other modules selected during generation
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        // ROUTING with ui.router
        $urlRouterProvider.otherwise('/main/list');
        $stateProvider
        // this state is placed in the <ion-nav-view> in the index.html
            .state('main', {
                url: '/main',
                abstract: true,
                views: {
                    '@': {
                        templateUrl: 'main/templates/menu.html',
                        controller: 'MenuCtrl as menu'
                    },
                    'MenuContent@main': {
                        templateUrl: 'tabs/templates/tabs.html'
                    }/*,
                    'navigation@app': {
                        templateUrl: layouts[layoutStyle].navigation,
                        controller: 'NavigationController as vm'
                    }*/
                }

            })
            .state('main.list', {
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'main/templates/list.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.listDetail', {
                url: '/list/detail',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list-detail.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.debug', {
                url: '/debug',
                views: {
                    'tab-debug': {
                        templateUrl: 'main/templates/debug.html',
                        controller: 'DebugCtrl as ctrl'
                    }
                }
            });
    });
