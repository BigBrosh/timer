export class TimerProgress {
	constructor(obj){
		this.circleRadius = 2;
		this.amount = 60;

		for (var key in obj) {
			this[key] = obj[key];
		}

		switch(this.queueNumber) {
			case 1:
				this.queueNumber = 1;
				break;

			case 2:
				this.queueNumber = 3;
				break;

			case 3:
				this.queueNumber = 5;
				break;

			case 4:
				this.queueNumber = 7;
				break;

			default:
				this.queueNumber = 1;
				break;
		}

		this.highlightedCount = Math.floor((this.checkNumber/this.total)*100);
		this.highlightedCount = parseInt((this.highlightedCount * this.amount)/100);

		this.element = this.parent.getContext('2d');
	}

	paintCircles() {
		this.centerCoordinateX = ((this.parent.width/4)/2)*(this.queueNumber) + this.circleRadius;
		this.centerCoordinateY = this.parent.height/2;

		for (let i = 0, amount = this.amount; i < amount; i++) { 
			this.coordinateX = this.centerCoordinateX + (this.parent.height/2 - this.circleRadius - 8) * Math.cos((2*Math.PI) * i/this.amount);
			this.coordinateY = this.centerCoordinateY + (this.parent.height/2 - this.circleRadius - 8) * Math.sin((2*Math.PI) * i/this.amount);

			this.element.beginPath();

			if (i <= this.highlightedCount)
			{
				this.element.fillStyle = '#4CAF50';	
			}

			else {
				this.element.fillStyle = '#FFF';
			}

			this.element.arc(this.coordinateX, this.coordinateY, this.circleRadius, 0, 360);
			this.element.fill();
		}
	}
}