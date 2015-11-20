angular.module('raddit', [])
.factory('posts', [function(){
  var o = {
    posts: [{title: 'hi', link: '', upvotes: 0}]
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
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    }

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }]);
