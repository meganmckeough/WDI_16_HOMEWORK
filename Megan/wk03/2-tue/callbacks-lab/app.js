var reset = document.querySelector('#reset');
var start = document.querySelector('#start');
var pause = document.querySelector('#pause');

var seconds = 0;

function startTime () {
	timerId = setInterval(updateTime, 1000);	
}


var updateTime = function () {
	seconds++;
	document.querySelector('h1').textContent = "Time elapsed: " + seconds;
};

start.addEventListener('click', startTime);
pause.addEventListener('click', function () {
		clearInterval(timerId);
	});
reset.addEventListener('click', function () {
		clearInterval(timerId);
		seconds = 0;
		document.querySelector('h1').textContent = "Stop Watch";
	})





