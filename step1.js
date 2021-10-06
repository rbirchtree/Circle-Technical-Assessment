var intervalId = setInterval(function(){
	console.log("Hello world")
}, 10000);

let tripValue = 0;

document.cookie = "name=oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe;SameSite=None; Secure";
document.cookie = "trip_number="+ tripValue + "; SameSite=None; Secure";

function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = '> ' + document.cookie
}

function clearOutputCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}

if (window.performance) {
  console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.info( "This page is reloaded" );
} else {
  console.info( "This page is not reloaded");
}

alert(pageAccessedByReload);