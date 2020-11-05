const images = ["regular_troll.png", "broken_troll.png"]

const between = (value, min, max) =>
  value < min
    ? min
    : (value > max ? max : value)

const randomIndex = between(Math.floor(Math.random() * images.length), 0, images.length - 1)

document.addEventListener("DOMContentLoaded", () => {
  const troll = document.getElementById('troll')
  troll.src = "images/" + images[randomIndex]
})

