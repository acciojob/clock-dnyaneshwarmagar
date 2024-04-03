//your JS code here. If required.
let timer = document.getElementById("timer");

let currentDate = new Date();

setInterval(funcion (){
	currentDate = new Date();
	timer.innerHTML = currentDate.toLocaleStrint();
},1000)
