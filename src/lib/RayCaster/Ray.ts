import { Vector } from "../Vector/Vector";

export class Ray{    
    public size=100;
    constructor(public pos:Vector,public  angle:number){}
    public draw(ctx:CanvasRenderingContext2D){
        ctx.beginPath();
        ctx.moveTo(this.pos.components[0],this.pos.components[1]);
        ctx.lineTo(
            this.pos.components[0]+Math.cos(this.angle)*this.size,
            this.pos.components[1]+Math.sin(this.angle)*this.size
        );
        ctx.stroke();
    }
    public update(ctx:CanvasRenderingContext2D){
        this.draw(ctx);
    }
}