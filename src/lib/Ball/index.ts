import Canvas from "../Canvas";
import Vector from "../Vector";

export default class Ball{
    pos:Vector=Vector.randLim(300);
    vel:Vector=new Vector();
    acc:Vector=new Vector();
    size:number=10;
    color:string="red";
    constructor(){}
    draw(c:Canvas){
        c.arc(this.pos.x, this.pos.y, this.size, false, this.color);
    }
}