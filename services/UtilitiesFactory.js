nicksFlix.factory('UtilitiesFactory', function() {
  return {
    findByName: function(reviews, reviewName) {
      for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].reviewName == reviewName) {
          return reviews[i];
        }
      }
      return "No Reviews";
    }
  }
});
