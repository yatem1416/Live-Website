function myFunction() {
var box = document.getElementById("subscribe");
var text = document.getElementById("email");
var email = document.getElementById("enter");
if (box.checked == true){
  text.style.display= "inline";
  email.style.display= "inline";
} else{
  text.style.display= "none";
  email.style.display= "none";
}
}