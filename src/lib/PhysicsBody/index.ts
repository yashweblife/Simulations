import Vector from "../Vector";

export default class PhysicsBody{
    pos:Vector = new Vector();
    vel:Vector = new Vector();
    acc:Vector = new Vector();
    bounding_box:Vector = new Vector();
    mass:number = 1;
    color:string = "red";
    momentum:Vector = new Vector();
    constructor(){}
    setPos(x:number, y:number){
        this.pos.x = x;
        this.pos.y = y;
        return this;
    }
    setVel(x:number, y:number){
        this.vel.x = x;
        this.vel.y = y;
        return this;
    }
    setAcc(x:number, y:number){
        this.acc.x = x;
        this.acc.y = y;
        return this;
    }
    setMass(mass:number){
        this.mass = mass;
        return this;
    }
    setColor(color:string){
        this.color = color;
        return this;
    }

}