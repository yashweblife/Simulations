import Canvas from "../Canvas";
import PhysicsBody from "../PhysicsBody";
import Vector from "../Vector";

export default class Ball extends PhysicsBody {
	size: number = Math.floor(Math.random() * 10) + 5;
	constructor() {
		super();
		this.setPos(Math.floor(Math.random() * 300), Math.floor(Math.random() * 300));
	}
	draw(c: Canvas) {
		c.arc(this.pos.x, this.pos.y, this.size, true, this.color);
		return this;
	}
	bound(x: number = 0, y: number = 0, w: number = 300, h: number = 300) {
		if (this.pos.x - this.size < x) {
			this.pos.x = x + this.size;
			this.vel.x *= -1;
		}
		if (this.pos.x + this.size > w) {
			this.pos.x = w - this.size;
			this.vel.x *= -1;
		}
		if (this.pos.y - this.size < y) {
			this.pos.y = y + this.size;
			this.vel.y *= -1;
		}
		if (this.pos.y + this.size > h) {
			this.pos.y = h - this.size;
			this.vel.y *= -1;
		}
		return this;
	}
	ballToBall(ball: Ball) {
		const dist = this.pos.dist(ball.pos);
		if (dist < this.size + ball.size) {
			const dir = this.pos.sub(ball.pos).normalize();
			this.pos.sub(dir.scale(this.size + ball.size / 2));
			ball.pos.add(dir.scale(this.size + ball.size / 2));
			this.vel.sub(dir.scale(this.mass))
			ball.vel.add(dir.scale(this.mass))
		}
		return this;
	}
	update() {
		this.acc = Vector.randMinMax(-1, 1);
		this.momentum = this.vel.clone().scale(this.mass);
		this.vel.add(this.acc).scale(0.9);
		this.pos.add(this.vel);
		return this;
	}
}