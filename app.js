var app = angular.module('raddit', []);

app.controller('MainController',[
'$scope',
function($scope){
  $scope.test = "HIYO";
  $scope.posts = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5'
  ]
}]);
