//random css color from array
var colors = ['#ff6867', '#ffcc00', '#c580c1', '#7fccff', '#99cc00'];

globalThis.addEventListener('load', function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--nakanocolors', randomColor);
  // console.log(randomColor);
});

// // --------------------------------------------------------------------
// // Password Requirement and Validation
// function checkPasswordValidation(value) {
//   const isWhitespace = /^(?=.*\s)/;
//   if (isWhitespace.test(value)) {
//     return 'Password must not contain Whitespaces.';
//   }

//   const isContainsUppercase = /^(?=.*[A-Z])/;
//   if (!isContainsUppercase.test(value)) {
//     return 'Password must have at least one Uppercase Character.';
//   }

//   const isContainsLowercase = /^(?=.*[a-z])/;
//   if (!isContainsLowercase.test(value)) {
//     return 'Password must have at least one Lowercase Character.';
//   }

//   const isContainsNumber = /^(?=.*[0-9])/;
//   if (!isContainsNumber.test(value)) {
//     return 'Password must contain at least one Digit.';
//   }

//   const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
//   if (!isContainsSymbol.test(value)) {
//     return 'Password must contain at least one Special Symbol.';
//   }

//   const isValidLength = /^.{12,16}$/;
//   if (!isValidLength.test(value)) {
//     return 'Password must be 12-16 Characters Long.';
//   }
//   strengthBadge.classList.add('valid')
//   return 'Password is Valid.';
// }

// // Password Input Indicator
// // timeout before a callback is called
// let timeout;

// // traversing the DOM and getting the input and span using their IDs

// let password = document.getElementById('mainPassword');
// let strengthBadge = document.getElementById('StrengthDisp');

// // Adding an input event listener when a user types to the password input
// password.addEventListener("input", () => {
//   //The badge is hidden by default, so we show it
//   strengthBadge.style.display = 'block';
//   clearTimeout(timeout);

//   //We then call the StrengChecker function as a callback then pass the typed password to it
//   timeout = setTimeout(() => checkPasswordValidation(password.value), 500);

//   //We then set the innerHTML of the span to the returned value of the checkPasswordValidation function
//   strengthBadge.innerHTML = checkPasswordValidation(password.value);

//   //Incase a user clears the text, the badge is hidden again
//   if (password.value.length !== 0) {
//     strengthBadge.style.display != 'block';
//   } else {
//     strengthBadge.style.display = 'none';
//   }
// });

// // --------------------------------------------------------------------

// // <input type="password" name="Password" id="mainPassword" required />
// // <span id="StrengthDisp" class="badge displayBadge"></span>

// // <label for="confirmPassword">Confirm Password</label>
// // <input type="password" name="ConfirmPassword" id="confirmPassword" required />

// function checkPassword() {
//   let password = document.getElementById('mainPassword').value;
//   let confirmPassword = document.getElementById('confirmPassword').value;
//   console.log(pass)
// }
