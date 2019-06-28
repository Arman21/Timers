var futureDate ;
futureDate = new Date(2019 , 11 , 30 , 16 , 45 , 20).getTime() ;
var timer ;
timer = setInterval(function() {
	var now ;
	now = new Date().getTime() ; 
	var difference ;
	difference = futureDate - now ;
	var day ;
	day = Math.floor(difference/(1000 * 60 * 60 * 24)) ;
	var hour ;
	hour = Math.floor(difference%(1000 * 60 * 60 * 24)/(1000 * 60 * 60)) ;
	var minute ;
	minute = Math.floor(difference%(1000 * 60 * 60)/(1000 * 60)) ;
	var second ;
	second = Math.floor(difference%(1000 * 60)/1000) ;
	document.getElementById("child1").innerHTML = day + "D" ;
	document.getElementById("child2").innerHTML = hour + "H" ;
	document.getElementById("child3").innerHTML = minute + "M" ;
	document.getElementById("child4").innerHTML = second + "S" ;
	if (difference<0) {
		clearInterval(timer) ;
		document.getElementById("main1").style.display = "none" ;
		document.getElementById("text1").innerHTML = "The End Of Time Of Discounts !" ;
	}
} , 1000) ;
var time ;
var running ;
time = 0 ;
running = 0 ;
function startTimer() {
	if (running==0) {
		running = 1 ;
		increment() ;
	}
} 
function finishTimer() {
	running = 0 ;
}
function increment() {
	if (running==1) {
		setTimeout(function() { 
			time++ ;
			var milisecond ;
			milisecond = time%10 ;
			var second2 ;
			second2 = Math.floor(time/10%60) ;
			var minut2 ;
			minut2 = Math.floor(time/10/60) ;
			var hour2 ;
			hour2 = Math.floor(time/10/60/60) ;
			if (second2<10) {
				second2 = "0" + second2 ;
			}
			if (minut2<10) {
				minut2 = "0" + minut2 ;
			}
			document.getElementById("child5").innerHTML = hour2 + "H" ;
			document.getElementById("child6").innerHTML = minut2 + "M" ;
			document.getElementById("child7").innerHTML = second2 + "S" ;
			document.getElementById("child8").innerHTML = milisecond + "MS" ;
			increment() ;
		} , 100) ;
	}
}