export default class Vector {
    constructor(public x: number=0, public y: number=0, public z: number=0) {

    }
    add(v: Vector) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    sub(v: Vector) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    mul(v: Vector) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }
    div(v: Vector) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        return this;
    }
    rotate(v: Vector) {
        const x = this.x * Math.cos(v.x) - this.y * Math.sin(v.x);
        const y = this.x * Math.sin(v.x) + this.y * Math.cos(v.x);
        this.x = x;
        this.y = y;
        return this;
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    dist(v: Vector) {
        return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y) + (this.z - v.z) * (this.z - v.z));
    }
    normalize() {
        const mag = this.mag();
        this.x /= mag;
        this.y /= mag;
        this.z /= mag;
        return this;
    }
    scale(v: Vector) {
        this.normalize();
        this.mul(v);
    }
    clone() {
        return new Vector(this.x, this.y, this.z);
    }
    static rand(){
        return new Vector(Math.random(), Math.random(), Math.random());
    }
    static randLim(max:number){
        return new Vector(Math.random()*max, Math.random()*max, Math.random()*max);
    }
    static randMinMax(min:number, max:number){
        return new Vector((Math.floor((Math.random()-0.5)*(max-min)+min)), (Math.floor((Math.random()-0.5)*(max-min)+min)), (Math.floor((Math.random()-0.5)*(max-min)+min)));
    }
}