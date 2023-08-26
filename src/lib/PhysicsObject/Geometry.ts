import { Vector } from "../Vector/Vector";

export class Geometry{
    constructor(public vertices:Vector[]=[]){}
    public getOffsetVertices(position:Vector):Geometry{
        return new Geometry(this.vertices.map((vertex)=>vertex.getAdd(position)));
    }
    public getScaledXVertices(scale:number):Geometry{
        return new Geometry(this.vertices.map((vertex)=>vertex.getScaleX(scale)));
    }
    public getScaledYVertices(scale:number):Geometry{
        return new Geometry(this.vertices.map((vertex)=>vertex.getScaleY(scale)));
    }
    public getRotatedVertices(angle:Vector):Geometry{
        return new Geometry(this.vertices.map((vertex)=>vertex.getRotated(angle)));
    }    
}


const circleShape = [];
const boxShape = [
    new Vector(-1, -1),
    new Vector(1, -1),
    new Vector(1, 1),
    new Vector(-1, 1),
    new Vector(-1, -1)
];
for(let i=-Math.PI;i<=Math.PI;i+=0.1){
    circleShape.push(new Vector(Math.cos(i), Math.sin(i)));
}
circleShape.push(new Vector(Math.cos(-Math.PI), Math.sin(-Math.PI)));

export const CIRCLE = new Geometry(circleShape); 
export const BOX = new Geometry(boxShape);