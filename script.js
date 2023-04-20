let userDetails = {};

function displayUserDetailsButton() {
  if (Object.keys(userDetails).length === 0) {
    document.getElementById('btn-2').style.display = 'none';
  }
  else{
      document.getElementById('btn-2').style.display = 'inline-block';
  } 
}
displayUserDetailsButton();

//A function to get user detail

function getUserDetails() {
  //get username
  let username = prompt('Enter your username: ');

  if (username == null) {
    return;
  }

  // validate username
  function validateUsername(username) {
    if (username.length <= 10 && username.length > 6) {
      return true;
    } else {
      return false;
    }
  }

  while (validateUsername(username) == false) {
    username = prompt(
      'Username must be at least 6 letters and less than 10 letters'
    );
  }

  userDetails.username = username;

  // get email address

  let email = prompt('Enter your email address');

  if (email == null) {
    return;
  }

  // validate email address

  function validateEmail(email) {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    emailCheckResult = emailCheck.test(email);

    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }

  while (validateEmail(email) == false) {
    email = prompt('Please enter a valid email');
  }

  userDetails.email = email;

  // get phone number
  let phoneNumber = prompt('Enter your phone number: ');
  if (phoneNumber == null) {
    return;
  }
  // validate phone number
  function validatePhoneNumber(phoneNumber) {
    let phoneno = /^\d{11}$/;
    if (phoneno.test(phoneNumber) == true) {
      return true;
    } else {
      // alert('message');
      return false;
    }
  }
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt('Phone number must be 11 digits');
  }
  userDetails.phoneNumber = phoneNumber;

  // get password
  let password = prompt('Enter a password: ');

  if (password == null) {
    return;
  }
  // validate password
  function validatePassword(password) {
    let passw = /^[A-Za-z]\w{7,14}$/;
    if (passw.test(password) == true) {
      return true;
    } else {
      return false;
    }
  }
  while (validatePassword(password) == false) {
    password = prompt(
      'Must contain at least one numeric digit,one uppercase and one lowercase letter'
    );
    if (password == null) {
      return;
    }
  }

  userDetails.password = password;
  // confirm password
  let confirmPassword = prompt('Confirm your password: ');

  if (confirmPassword == null) {
    return;
  }
  function validateConfirmPassword(confirmPassword) {
    if ((password = confirmPassword)) {
      alert('password confirmed');
      return true;
    } else {
      alert('sorry, try again');
      return false;
    }
  }

  while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt('Password does not match');
  }
  console.log(userDetails);
  displayUserDetailsButton();
}


function displayUserDetails() {
  alert(
    `Your Details \n\nUsername: ${userDetails.username} \nPhonenumber: ${userDetails.phoneNumber} \nEmail: ${userDetails.email}`
  );
}
