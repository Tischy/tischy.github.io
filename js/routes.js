angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('herneHillHarriers', {
    url: '/page1',
    templateUrl: 'templates/herneHillHarriers.html',
    controller: 'herneHillHarriersCtrl'
  })

  .state('aboutTheClub', {
    url: '/page2',
    templateUrl: 'templates/aboutTheClub.html',
    controller: 'aboutTheClubCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});