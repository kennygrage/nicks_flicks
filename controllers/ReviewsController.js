nicksFlix.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;
});
