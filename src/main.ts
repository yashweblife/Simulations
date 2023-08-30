import { Canvas, Vector } from "./lib";
import { PhysicsObject } from "./lib/PhysicsObject/PhysicsObject";

const canvas = new Canvas();

export class World{
    public objects:PhysicsObject[] = [];
    public inView:PhysicsObject[] = [];
    public origing:Vector = new Vector(0,0);
    public zoom = 1;
    public rotation:Vector = new Vector(0,0);
    public backgroundColor:string = "#000000";
    public canvas:Canvas = new Canvas();
    constructor(){
        this.objects = [];
        this.inView = [];
        this.origing = new Vector(0,0);
        this.zoom=1;
        this.rotation = new Vector(0,0);
    }
    public add(object:PhysicsObject){
        this.objects.push(object);
    }
    public update(ctx:CanvasRenderingContext2D){
       
        this.inView.forEach((object)=>{
            object.update(ctx);
        });
    }
}


const animation = () => {
    canvas.clear();
    canvas.grid();
    requestAnimationFrame(animation);
}

animation();