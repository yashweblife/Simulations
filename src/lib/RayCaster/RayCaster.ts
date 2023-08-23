import { PhysicsObject } from "../PhysicsObject/PhysicsObject";
import { Vector } from "../Vector/Vector";
import { Ray } from "./Ray";

export class RayCaster{
    public rays:Ray[]=[];
    public position:Vector;
    
    constructor(public parent:PhysicsObject, fov:number, numRays:number){
        this.position=this.parent.position;
        for(let i=0;i<numRays;i++){
            this.rays.push(new Ray(this.position,fov/numRays*i));
        }
    }
    public update(ctx:CanvasRenderingContext2D){
        this.position=this.parent.position;
        for(let ray of this.rays){
            ray.pos=this.position;
        }
        this.rays.forEach(ray=>ray.update(ctx));
    }
}