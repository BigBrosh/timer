class Timeleft {
	constructor(target, parent, mainWrap) {
		this.block = document.createElement('div');
		this.block.className = parent;

		this.mainWrap = document.querySelector(mainWrap) || document.getElementsByClassName('main')[0];

		this.mainWrap.appendChild(this.block);
		this.runTimer(target, this.block);
	}
	
	runTimer(target, parent) {
		setInterval(function(){
			this.current = new Date();
			this.target = target;

			this.difference = (this.target - this.current) > 0 ? (this.target - this.current) : 0;

			this.seconds = this.difference/1000;
			this.minutes = this.seconds/60;
			this.hours = this.minutes/60;

			this.seconds = this.seconds%60;
			this.minutes = this.minutes%60;
			this.hours = this.hours%24;

			this.seconds = parseInt(this.seconds);
			this.minutes = parseInt(this.minutes);
			this.hours = parseInt(this.hours);

			this.seconds = this.seconds > 9 ? this.seconds : '0' + this.seconds;
			this.minutes = this.minutes > 9 ? this.minutes : '0' + this.minutes;
			this.hours = this.hours > 9 ? this.hours : '0' + this.hours;

			parent.innerHTML = `timeleft: ${this.hours} : ${this.minutes} : ${this.seconds}`;
		}, 1000);
	}
}

var target = new Date(2018, 1, 22, 22, 21, 60, 0);
var timeleft = new Timeleft(target, 'output');

var target2 = new Date(2018, 1, 23, 20, 32, 60, 0);
var timeleft2 = new Timeleft(target2, 'second_output', '.timer_wrap');