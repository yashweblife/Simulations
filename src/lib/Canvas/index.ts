export default class Canvas {
	c: CanvasRenderingContext2D
	width: number = 300;
	height: number = 300;
	constructor(c: HTMLCanvasElement) {
		this.c = c.getContext("2d")!;
		c.width = 300;
		c.height = 300;
	}
	arc(x: number, y: number, radius: number, stroke: boolean = false, color: string = "red") {
		this.c.beginPath();
		this.c.arc(x, y, radius, 0, Math.PI * 2);
		if (stroke) {
			this.c.strokeStyle = color;
			this.c.stroke();
		} else {
			this.c.fillStyle = color;
			this.c.fill();
		}
		this.c.closePath();
	}
	rect(x: number, y: number, w: number, h: number, stroke: boolean = false, color: string = "red") {
		this.c.beginPath();
		this.c.rect(x, y, w, h);
		if (stroke) {
			this.c.strokeStyle = color;
			this.c.stroke();
		} else {
			this.c.fillStyle = color;
			this.c.fill();
		}
		this.c.closePath();
	}
	clear() {
		this.c.clearRect(0, 0, this.width, this.height);
	}
	fill(color: string) {
		this.c.fillStyle = color;
		this.c.fill();
	}
	stroke(color: string) {
		this.c.strokeStyle = color;
		this.c.stroke();
	}
	fillRect(x: number, y: number, w: number, h: number, color: string = "red") {
		this.c.fillStyle = color;
		this.c.fillRect(x, y, w, h);
	}
}