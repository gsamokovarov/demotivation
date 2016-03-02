document.addEventListener("DOMContentLoaded", function() {
  var images = ["regular_troll.png", "broken_troll.png"];
  var randomImageIndex = Math.floor((Math.random() * 2) - 0.01);

  var troll = document.getElementById('troll');
  troll.src = "images/" + images[randomImageIndex];
});

