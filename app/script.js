//random css color from array
var colors = ['#ff6867', '#ffcc00', '#c580c1', '#7fccff', '#99cc00'];

globalThis.addEventListener('load', function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--nakanocolors', randomColor);
  // console.log(randomColor);
});

// Password Strength Meter
// Run pswmeter with options
const myPassMeter = passwordStrengthMeter({
  containerElement: '#pswmeter',
  passwordInput: '#mainPassword',
  showMessage: false,

  height: 6,
  borderRadius: 0,
  pswMinLength: 12,
  colorScore1: '#aaa',
  colorScore4: 'limegreen'
});
