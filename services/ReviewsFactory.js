nicksFlix.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [];
  factory.addReview = function() {
    factory.reviews.push({name: factory.reviewName, id: factory.reviews.length + 1, reviewContent: factory.reviewContent });
    factory.reviewName = null;
    factory.reviewContent = null;
  };
  return factory;
});
