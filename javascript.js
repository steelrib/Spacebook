function validateName() { //validates name to contain only letters and be 2-15 characters in length
  var name = document.getElementById("name").value;
  var regex1 = /^[a-zA-Z\s\'\-']{2,15}$/;
   if (regex1.test(name) && name.length > 1) {
     document.getElementById('help-text1').style.color = "green";
     document.getElementById('help-text1').innerHTML = "<strong>Cool Name</strong>";
     return true;
   } else {
     document.getElementById('help-text1').style.color = "red";
     document.getElementById('help-text1').innerHTML = "<strong> Please enter 2-15 characters";
     return false;
   }
 }

 function validateEmail() { //validates email using a regular expression
   var email= document.getElementById('email').value;
   var regex2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if(regex2.test(email)) {
     document.getElementById('help-text2').style.color = "green";
     document.getElementById('help-text2').innerHTML = "<strong>Valid</strong>";
     return true;
   } else {
     document.getElementById('help-text2').style.color = "red";
     document.getElementById('help-text2').innerHTML = "<strong>Please Enter Valid E-mail Address.</strong>";
     return false;
   }
 }

 function validateUserName() { //validate username to contain between 6 and 20 letters only by matching with a regular expression
   var username = document.getElementById('username').value;
   var regex1 = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    if (regex1.test(username) && username.length >= 6 && username.length <= 20) {
      document.getElementById('help-text3').style.color = "green";
      document.getElementById('help-text3').innerHTML = "<strong>Real Original</strong>";
      return true;
    } else {
      document.getElementById('help-text3').style.color = "red";
      document.getElementById('help-text3').innerHTML = "<strong>Try again. Allowed 6-20 characters.</strong>";
      return false;
    }
  }

  function validatePass1() { //validates password to contain at least 1 uppercase letter, 1 lowercase letter, and one numeric digit
    var pass1 = document.getElementById('pass1').value;
    var regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
    if (regexPass.test(pass1)) {
      document.getElementById('help-text4').style.color = "green";
      document.getElementById('help-text4').innerHTML = "<strong>Password is Valid</strong>";
      return true;
    } else {
      document.getElementById('help-text4').style.color = "red";
      document.getElementById('help-text4').innerHTML = "<strong>Password must contain one uppercase letter, one lowercase letter, and a number!</strong>";
      return false;
    }
  }

  function validatePass2() { //validates password by checking it matches it with password created
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    if (pass1 == pass2) {
      document.getElementById('help-text5').style.color = "green";
      document.getElementById('help-text5').innerHTML = "<strong>Passwords Match!!</strong>";
      return true;
    } else {
      document.getElementById('help-text5').style.color = "red";
      document.getElementById('help-text5').innerHTML = "<strong>Passwords don't match :-(</strong>";
      return false;
    }
  }

  function validateForm() {
    if (validateName() && validateUserName() && validateEmail() && validatePass2() && validateCheckboxes()) {
      alert("Let's blast off!");
      return true;
    } else {
      return false;
    }
  }
