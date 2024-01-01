

var usernameInput =document.getElementById("signupName");
var userEmailInput =document.getElementById("signinEmail");
var userPasswordInput =document.getElementById("signinPassword");


var userinfo = [];
if(localStorage.getItem("users")== null){
  userinfo = [];
}
else{
  userinfo =JSON.parse(localStorage.getItem("users"));
}



function signUp(){
  userInputsValidation();
  isExist();

  if( userInputsValidation() ==true &&  isExist()== false){
var user = {
    name:usernameInput.value,
    email:userEmailInput.value,
    password:userPasswordInput.value,

  };
  userinfo.push(user)
  localStorage.setItem("users",JSON.stringify(userinfo));
  var confirmMsg = document.getElementById('confirmMsg');
  confirmMsg.classList.replace("d-none","d-block");
  
  var signin = document.getElementById("signin");
  signin.classList.replace("d-none","d-block");
  }else{
    var tryAgainMsg=document.getElementById("tryAgainMsg");
    tryAgainMsg.classList.replace("d-none","d-block");
  }

  
}

function usernameValidation(){
  var usernameAlert=document.getElementById("useremailAlert");
  var regex =/^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
  if(regex.test(usernameInput.value == true) && usernameInput.value !=""){

    usernameInput.classList.add("is-valid");
    usernameInput.classList.remove("is-invalid");
    usernameAlert.classList.replace("d-block","d-none");
    return true;
  }else{
    usernameInput.classList.add("is-invalid");
    usernameInput.classList.remove("is-valid");
    usernameAlert.classList.replace("d-none","d-block");
    return false;
  }
}


function userPasswordValidation(){
  var regex = /^.{5,15}/;
  var userpasswordAlert = document.getElementById("userpasswordAlert");
  if(regex.test(userPasswordInput.value)==true && userPasswordInput.value !=""){
    userPasswordInput.classList.add("is-valid");
    userPasswordInput.classList.remove("is-invalid");
    userpasswordAlert.classList.replace("d-block","d-none");
    return true;
  }
  else{

    userPasswordInput.classList.add("is-invalid");
    userPasswordInput.classList.remove("is-valid");
    userpasswordAlert.classList.replace("d-none","d-block");
     return false ;

  }
}



function userEmailValidation(){
  var useremailAlert = document.getElementById("useremailAlert");
  var regex = /@[a-z]{5-10}(\.com)$/;

  if(regex.test(userEmailInput.value) == true && userEmailInput.value != ""){
    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    useremailAlert.classList.replace("d-block","d-none");
    return true;
  }
  else{
    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    useremailAlert.classList.replace("d-block","d-none");
    return false;
  }
}






function userInputsValidation(){
  usernameValidation();
  userPasswordValidation();
  userEmailValidation();
  if(
    usernameValidation()==true && userPasswordValidation() == true && userEmailValidation() == true
  ){
    return true;
  }
  else{
    return false;
  }

}


function isExist(){
var accountExitMsg = document.getElementById("accountExitMsg");
for(var i = 0;i < userinfo.lenghth;i++){
  if(userinfo[i].name.toLowerCase() == usernameInput.value.toLowerCase()||
  userinfo.email.toLowerCase()==userEmailInput.value.toLowerCase()){
    usernameInput.classList.remove("is-valid");
    userEmailInput.classList.remove("is-valid");
    accountExitMsg.classList.replace("d-none" ,"d-block");
    return true;
  } 
  else{
    return false;
  }
  
}
}



var username =localStorage.getItem("sessionUsername");
function login(){
  var signinEmail = document.getElementById("signinEmail");
  var signinPassword = document.getElementById("signinPassword");
  var loginBtn = document.getElementById("loginBtn");
  var incorrect =document.getElementById("incorrect");
  if(signinEmail.value == "" || signinPassword == ""){
var fillMsg = document.getElementById("fillMsg");
fillMsg.classList.replace("d-none","d-block");
return false;
  }

  for(var i=0 ; userinfo.length ; i++){
    if(userinfo[i].email.toLowerCase() == signinEmail.value.toLowerCase()
    && userinfo.password.toLowerCase() == signinPassword.value.toLowerCase())
    {
localStorage.setItem("sessionUsername", userinfo[i].name);
loginBtn.setAttribute("href","home.html")
    }
    else{
      incorrect.classList.replace("d-none","d-block");
    }
  }
}


function displayWelcomeUser(){
document.getElementById("username").innerHTML="welocme"+username;
}



function logout(){
  localStorage.removeItem("sessionUsername");
}