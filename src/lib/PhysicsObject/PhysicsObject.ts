import { RayCaster } from "../RayCaster/RayCaster";
import { Vector } from "../Vector/Vector";
import { BOX, CIRCLE, Geometry } from "./Geometry";

export class PhysicsObject{
    public position:Vector;
    public velocity:Vector;
    public acceleration:Vector;
    public mass:number;
    public rayCaster:RayCaster;
    public shape:Geometry = new Geometry();
    public color:string="#ff0000";
    public scale:Vector=new Vector(1,1);
    public rotation:Vector=new Vector(0,0);
    constructor(){
        this.position=new Vector(0,0);
        this.velocity=new Vector(0,0);
        this.acceleration=new Vector(0,0);
        this.mass=1;
        this.rayCaster=new RayCaster(this, 360*(Math.PI/180), 4);
    }
    public setShape(shape:Vector[]){
        this.shape=new Geometry(shape);
    }
    public addForce(force:Vector){
        this.acceleration = force.scale(1/this.mass);
    }
    public setMass(mass:number){
        this.mass=mass;
    }
    public update(ctx:CanvasRenderingContext2D){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.scale(0);
        this.rayCaster.update(ctx);
        ctx.beginPath();
        ctx.moveTo(this.position.components[0], this.position.components[1]);
        this.shape
        .getRotatedVertices(this.rotation)
        .getScaledXVertices(this.scale.components[0])
        .getScaledYVertices(this.scale.components[1])
        .getOffsetVertices(this.position)
        .forEach((vertex)=>{
            ctx.lineTo(vertex.components[0], vertex.components[1]);
        });
        ctx.lineTo(this.position.components[0], this.position.components[1]);
        
        ctx.fillStyle=this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    public static CIRCLE(){
        const output = new PhysicsObject();
        output.shape = CIRCLE;
        return output;
    }
    public static BOX(){
        const output = new PhysicsObject();
        output.shape = BOX;
        return output;
    }
}