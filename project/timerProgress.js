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

		this.element = this.parent.getContext('2d');
	}

	paintCircles() {
		this.centerCoordinateX = ((this.parent.width/4)/2)*(this.queueNumber) + this.circleRadius;
		this.centerCoordinateY = this.parent.height/2;

		for (let i = 0; i < this.amount; i++) { 
			this.coordinateX = this.centerCoordinateX + (this.parent.height/2 - this.circleRadius - 8) * Math.cos((1.7*Math.PI) * i/3);
			this.coordinateY = this.centerCoordinateY + (this.parent.height/2 - this.circleRadius - 8) * Math.sin((1.7*Math.PI) * i/3);

			this.element.beginPath();  
			this.element.fillStyle = '#FFF'; // 'rgba(0, 179, 141, .3)'
			this.element.arc(this.coordinateX, this.coordinateY, this.circleRadius, 0, 360);
			this.element.fill();
		}
	}
}