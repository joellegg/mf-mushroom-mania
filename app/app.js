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
        $scope.mushrooms = value.data.mushrooms;
        // console.log($scope.mushrooms)
      })
  })
  .factory('mushroomFactory', ($http) => {
    return {
      getShroomed: () => {
        return $http.get('list.json')
      }
    }
  })
