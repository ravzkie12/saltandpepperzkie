//random css color from array
var colors = ['#ff6867', '#ffcc00', '#c580c1', '#7fccff', '#99cc00'];

globalThis.addEventListener('load', function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--nakanocolors', randomColor);
  console.log(randomColor);
});