const IMAGES = ["regular_troll.png", "broken_troll.png", "ego_troll.png"];

const between = (value, min, max) =>
  value < min ? min : value > max ? max : value;

document.addEventListener("DOMContentLoaded", () => {
  const randomIndex = between(
    Math.floor(Math.random() * IMAGES.length),
    0,
    IMAGES.length - 1
  );

  const trollImg = document.getElementById("troll");
  trollImg.src = "images/" + IMAGES[randomIndex];
});
