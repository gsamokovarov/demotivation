document.addEventListener("DOMContentLoaded", function() {
  var between = function(value, min, max) {
    return value < min ? min : (value > max ? max : value);
  };

  var images = ["regular_troll.png", "broken_troll.png"];
  var randomImageIndex = between(Math.floor(Math.random() * 2), 0, 1);

  var troll = document.getElementById('troll');
  troll.src = "images/" + images[randomImageIndex];
});

