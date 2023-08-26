import { Vector, toRad } from "../Vector/Vector";

export class Canvas{
    public dom:HTMLCanvasElement=document.createElement("canvas");
    public ctx:CanvasRenderingContext2D=this.dom.getContext("2d")!;
    public center:Vector=new Vector(this.dom.width/2,this.dom.height/2);
    public rotation:Vector=new Vector(toRad(0),toRad(0),toRad());
    public zoom:number=20;
    constructor(parent:HTMLElement=document.body){
        parent.appendChild(this.dom);
        this.dom.width=300;
        this.dom.height=300;
    }
    public grid(){
        const zoom =this.zoom;
        const rotation = this.rotation;
        const pos = this.center;
        const size = new Vector(this.dom.width,this.dom.height);
        for(let i=0;i<size.components[0]/zoom;i++){
            this.ctx.strokeStyle = 'rgba(0,0,0,0.2)'
            {
                const start = new Vector(i * zoom, 0,0);
                const end = new Vector(i * zoom, size.components[1],0);
                start.rotate(rotation).add(pos.div(2));
                end.rotate(rotation).add(pos.div(2));
                this.line(start, end);
            }{
                const start = new Vector(0, i * zoom,0);
                const end = new Vector(size.components[0], i * zoom,0);
                start.rotate(rotation).add(pos.div(2));
                end.rotate(rotation).add(pos.div(2));
                this.line(start, end);
            }
        }
        
    }
    public line(start:Vector, end:Vector, color:string="rgba(0,0,0,0.2)"){
        this.ctx.beginPath();
        this.ctx.moveTo(start.components[0], start.components[1]);
        this.ctx.lineTo(end.components[0], end.components[1]);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
        this.ctx.closePath();
    }
    public clear(){
        this.ctx.clearRect(0,0,this.dom.width,this.dom.height);
    }
}