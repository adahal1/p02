var ex1 = 0;
var ex2 = 0;
var ex3 = 0;

function validate(){
	var secret;
	var input1;
	secret = "36812"
	secret = document.getElementById("guessNum").value;
	input1 = document.getElementById("ex1button").value;

if( secret < 36811 || secret > 36813){
		document.getElementById("output-text").innerHTML =  secret + " Is not a valid number, please try again!!";
	}
	else{
	if(secret == 36812){
		document.getElementById("output-text").innerHTML =  secret + " is correct";
	}
	else if(secret > 36814){
		document.getElementById("output-text").innerHTML =  secret + " is too high";
	}
	else if(secret < 36810){
		document.getElementById("output-text").innerHTML = secret + " is too low";
	}
	}
}

function validate2(){
	var secret;
	var input1;
	secret = "58"
	secret = document.getElementById("guessNum2").value;
	input1 = document.getElementById("ex2button").value;

if( secret < 57 || secret > 59){
		document.getElementById("output-text").innerHTML =  secret + " Is not a valid number, please try again!!";
	}
	else{
	if(secret == 58){
		document.getElementById("output-text").innerHTML =  secret + " is correct";
	}
	else if(secret > 60){
		document.getElementById("output-text").innerHTML =  secret + " is too high";
	}
	else if(secret < 56){
		document.getElementById("output-text").innerHTML = secret + " is too low";
	}
	}
}

function validate3(){
	var secret;
	var input1;
	secret = "1433"
	secret = document.getElementById("guessNum3").value;
	input1 = document.getElementById("ex3button").value;

if( secret < 1432 || secret > 1434){
		document.getElementById("output-text").innerHTML =  secret + " Is not a valid number, please try again!!";
	}
	else{
	if(secret == 1433){
		document.getElementById("output-text").innerHTML =  secret + " is correct";
	}
	else if(secret > 1435){
		document.getElementById("output-text").innerHTML =  secret + " is too high";
	}
	else if(secret < 1432){
		document.getElementById("output-text").innerHTML = secret + " is too low";
	}
	}
}

function checkoutOrders(){
  var ex1 = getCookie("36812");
  var ex2 = getCookie("58");
  var ex3 = getCookie("1433");

  document.getElementById("output-text").inggerHTML = ex1;
  document.getElementById("output-text").inggerHTML = ex2;
  document.getElementById("output-text").inggerHTML = ex3;  
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCStrxg();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
