nicksFlix.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory) {
  // PASS IN THE UTILITIES FACTORY ABOVE
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;

  // THIS NEEDS TO ESTABLISH A SINGLE REVIEW USING findById()
  // $scope.review = USE FIND BY ID HERE;
});
