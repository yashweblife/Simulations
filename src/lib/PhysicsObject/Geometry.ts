import { Vector } from "../Vector/Vector";

export class Geometry{
    constructor(public vertices:Vector[]=[]){}
    public getOffsetVertices(position:Vector):Vector[]{
        return this.vertices.map((vertex)=>vertex.getAdd(position));
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