angular.module('shroomApp', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
    .when('/', {
      controller: 'RootCtrl',
      templateUrl: '/partials/root.html'
    })
  })
  .controller('RootCtrl', function($scope, mushroomFactory){
    mushroomFactory
      .getShroomed()
      .then((value) => {
        $scope.mushrooms = value;
        //$scope.description = value.description;
        console.log('value.data', value)
      })
  })
  .factory('mushroomFactory', ($http) => {
    return {
      getShroomed: () => {
        return $http
          .get('list.json')
          .then((value) => {
            console.log('value.data', value.data)
          })
      }
    }
  })
