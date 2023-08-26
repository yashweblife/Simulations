import { Vector, toRad } from "../Vector/Vector";

export class Canvas{
    public dom:HTMLCanvasElement=document.createElement("canvas");
    public ctx:CanvasRenderingContext2D=this.dom.getContext("2d")!;
    constructor(parent:HTMLElement=document.body){
        parent.appendChild(this.dom);
        this.dom.width=300;
        this.dom.height=300;
    }
    public grid(){
        //create a zoomable rotatable grid 
        const zoom =20;
        const rotation = new Vector(toRad(80),toRad(10),toRad());
        const pos = new Vector(0,150,0);
        const size = new Vector(this.dom.width,this.dom.height);
        for(let i=0;i<size.components[0]/zoom;i++){
            this.ctx.strokeStyle = 'rgba(0,0,0,0.2)'
            {
                const start = new Vector(i * zoom, 0,0);
                const end = new Vector(i * zoom, size.components[1],0);
                start.rotate(rotation).add(pos);
                end.rotate(rotation).add(pos);
                this.line(start, end);
            }{
                const start = new Vector(0, i * zoom,0);
                const end = new Vector(size.components[0], i * zoom,0);
                start.rotate(rotation).add(pos);
                end.rotate(rotation).add(pos);
                this.line(start, end);
            }
        }
        
    }
    public line(start:Vector, end:Vector, color:string="rgba(0,0,0,0.2)"){
        this.ctx.beginPath();
        this.ctx.moveTo(start.components[0], start.components[1]);
        this.ctx.lineTo(end.components[0], end.components[1]);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    public clear(){
        this.ctx.clearRect(0,0,this.dom.width,this.dom.height);
    }
}