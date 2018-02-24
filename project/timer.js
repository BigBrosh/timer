class Timeleft {
	constructor(obj) {
		for (var key in obj) {
			this[key + 'Name'] = obj[key];
		}

		this.target = this.targetName;
		this.block = document.createElement('div');
		this.block.className = this.parentName || 'output';

		this.mainWrap = document.querySelector(this.mainWrapName) || document.getElementsByClassName('main')[0];

		this.mainWrap.appendChild(this.block);
		this.runTimer(this.target, this.block);
	}
	
	runTimer(target, parent) {
		setInterval(function(){
			this.current = new Date();
			this.target = target;

			this.difference = (this.target - this.current) > 0 ? (this.target - this.current) : 0;

			this.seconds = this.difference/1000;
			this.minutes = this.seconds/60;
			this.hours = this.minutes/60;
			this.days = this.hours/24;

			this.seconds = this.seconds%60;
			this.minutes = this.minutes%60;
			this.hours = this.hours%24;
			this.days = this.days%365;

			this.seconds = parseInt(this.seconds);
			this.minutes = parseInt(this.minutes);
			this.hours = parseInt(this.hours);
			this.days = parseInt(this.days);

			this.seconds = this.seconds > 9 ? this.seconds : '0' + this.seconds;
			this.minutes = this.minutes > 9 ? this.minutes : '0' + this.minutes;
			this.hours = this.hours > 9 ? this.hours : '0' + this.hours;

			parent.innerHTML = `timeleft: ${this.days} : ${this.hours} : ${this.minutes} : ${this.seconds}`;
		}, 1000);
	}
}

var target = new Date(2018, 1, 25, 22, 21, 60, 0);
var timeleft = new Timeleft({
	target: target, 
	parent: 'output'
});

var target2 = new Date(2018, 1, 24, 20, 32, 60, 0);
var timeleft2 = new Timeleft({
	target: target2, 
	parent: 'second_output', 
	mainWrap: '.timer_wrap'
});