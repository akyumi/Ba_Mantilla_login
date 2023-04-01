function showp(){
  var password = document.querySelector("#pass");
  let show = document.getElementById("show");


  if (password.type === "password"){
      password.type = "text";
      show.textContent = "hide";
  }else{
      password.type = "password";
      show.textContent = "show";
  }
}

function validate(){

  var user = document.querySelector("#user");
  var pass = document.querySelector("#pass");
  var fail = document.querySelector(".error");
  var error = "Log-in Error.";
  var success = "Successful Log-In";

   if (user.value.length == 0 && pass.value.length != 0)
    { 
      fail.innerHTML = "Please enter your username."; 
      console.log(error);
    } 
  
    if (user.value.length != 0 && pass.value.length == 0)
    { 
      fail.innerHTML = "Please enter your password.";
      console.log(error);
    } 
    
    if (user.value.length == 0 && pass.value.length == 0)
    { 
      fail.innerHTML = "Please fill in a valid value for all required fields.";
      console.log(error);
    } 

    if (user.value.length != 0 && pass.value.length != 0)
    { 
      fail.innerHTML = ""; 	
      window.location.href = "files/index.html";
      console.log(success);
    }
}

function sprite() {
  document.getElementById("facebook").style.backgroundPosition = 
  `-683px -287px`;

  document.getElementById("instagram").style.backgroundPosition = 
  `-681px -429px`;

  document.getElementById("gmail").style.backgroundPosition = 
  `-341px -717px`;
}

function stopAnimate(){
  document.getElementById("facebook").style.backgroundPosition = 
  `-1636px -289px`;

  document.getElementById("instagram").style.backgroundPosition = 
  `-1635px -429px`;

  document.getElementById("gmail").style.backgroundPosition = 
  `-1293px -717px`;
}
