import { Canvas } from "../../lib";

export class Gravity{
    public balls:Ball[] = [];
    public canvas:Canvas;
    constructor(parent:HTMLElement){
        this.canvas = new Canvas(parent);
        for(let i=0;i<10;i++){
            this.balls.push(new Ball(this.canvas));
        }
        this.update();
    }
    update(){}
}