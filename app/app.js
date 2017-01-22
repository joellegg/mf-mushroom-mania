angular.module('shroomApp', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
    .when('/', {
      controller: 'RootCtrl',
      templateUrl: '/partials/root.html'
    })
