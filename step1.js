var intervalId = setInterval(function(){
	console.log("Hello world")
}, 10000);

document.cookie = "name=oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; trip_number=0; SameSite=None; Secure";

function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = '> ' + document.cookie
}

function clearOutputCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}