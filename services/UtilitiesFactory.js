nicksFlix.factory('UtilitiesFactory', function() {
  return {
    // REFACTOR FOR ID
    findByName: function(reviews, reviewName) {
      for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].reviewName == reviewName) {
          console.log("Found one");
          return reviews[i];
        }
      }
      return "No Reviews";
    }
  }
});
