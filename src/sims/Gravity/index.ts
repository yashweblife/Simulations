import { Canvas } from "../../lib";
import { PhysicsObject } from "../../lib/PhysicsObject/PhysicsObject";

class Ball extends PhysicsObject{
    
}

export class Gravity{
    public balls:Ball[] = [];
    public canvas:Canvas;
    constructor(parent:HTMLElement){
        this.canvas = new Canvas(parent);
        for(let i=0;i<10;i++){
            this.balls.push(new Ball());
        }
        this.update();
    }
    update(){}
}