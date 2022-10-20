//random css color from array
var colors = ['#ff6867', '#ffcc00', '#c580c1', '#7fccff', '#99cc00'];

globalThis.addEventListener('load', function () {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--nakanocolors', randomColor);
  console.log(randomColor);
});

//random image from array
var images = ['./ichika_hover.webp', './nino_hover.webp', './miku_hover.webp', './yotsuba_hover.webp', './itsuki_hover.webp'];

globalThis.addEventListener('load', function () {
  var randomImage = images[Math.floor(Math.random() * images.length)];
  document.getElementsByClassName("imgHome")[0].src = randomImage;
  console.log(randomImage);
});