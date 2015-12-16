angular.module('raddit', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url:'/home',
        templateUrl:'/home.html',
        controller:'MainController'
      })

      .state('posts', {
        url:'/posts/{id}',
        templateUrl:'/posts.html',
        controller:'PostsController'
      });

    $urlRouterProvider.otherwise('home');
}])

.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])

.controller('MainController', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.test = "HI";
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if ($scope.title === ''){
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments:[
          {author: "Guy", body: 'Flavortown', upvotes: 0},
          {author: "Fierri", body: 'FLAVOR', upvotes: 0}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    }

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }])

.controller('PostsController', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){
    $scope.post = post.posts[$stateParams.id]
}]);
