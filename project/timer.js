import {TimerProgress} from './timerProgress.js';

class Timeleft {
	constructor(obj) {
		for (var key in obj) {
			this[key + 'Name'] = obj[key];
		}

		this.target = this.targetName;

		this.block = document.createElement('canvas');
		this.block.className = this.parentName || 'output';
		this.block.width = 280;
		this.block.height = 80;
		this.element = this.block.getContext('2d');

		this.mainWrap = document.querySelector(this.mainWrapName) || document.getElementsByClassName('main')[0];
		this.mainWrap.appendChild(this.block);

		this.runTimer(this.target, this.block, this.element, this.progress);
	}
	
	runTimer(target, parent, element, progress) {
		setInterval(function(){
			this.current = new Date();

			this.difference = (target - this.current) > 0 ? (target - this.current) : 0;

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
			this.days = this.days < 10 ? '00' + this.days : this.days < 100 ? '0' + this.days : this.days;

			element.clearRect(0, 0, parent.width, parent.height);
			element.textBaseline = 'middle';
			element.textAlign = 'center';
			element.fillStyle = "#FFF";
			element.font = "22pt Arial";
			element.fillText(`${this.days}`, parent.width/8, parent.height/2);

			element.textBaseline = 'middle';
			element.textAlign = 'center';
			element.fillStyle = "#FFF";
			element.font = "22pt Arial";
			element.fillText(`${this.hours}`, (parent.width/8)*3, parent.height/2);

			element.textBaseline = 'middle';
			element.textAlign = 'center';
			element.fillStyle = "#FFF";
			element.font = "22pt Arial";
			element.fillText(`${this.minutes}`, (parent.width/8)*5, parent.height/2);

			element.textBaseline = 'middle';
			element.textAlign = 'center';
			element.fillStyle = "#FFF";
			element.font = "22pt Arial";
			element.fillText(`${this.seconds}`, (parent.width/8)*7, parent.height/2);

			this.progressDays = new TimerProgress({
				parent: parent,
				queueNumber: 1,
				circleRadius: 1
			});
			this.progressDays.paintCircles();

			this.progressHours = new TimerProgress({
				parent: parent,
				queueNumber: 2,
				circleRadius: 1
			});
			this.progressHours.paintCircles();

			this.progressMinutes = new TimerProgress({
				parent: parent,
				queueNumber: 3,
				circleRadius: 1
			});
			this.progressMinutes.paintCircles();

			this.progressSeconds = new TimerProgress({
				parent: parent,
				queueNumber: 4,
				circleRadius: 1
			});
			this.progressSeconds.paintCircles();

		}, 1000);
	}
}

var target = new Date(2018, 1, 25, 22, 21, 60, 0);
var timeleft = new Timeleft({
	target: target, 
	parent: 'output'
});

var target2 = new Date(2018, 3, 24, 20, 32, 60, 0);
var timeleft2 = new Timeleft({
	target: target2, 
	parent: 'second_output', 
	mainWrap: '.timer_wrap'
});