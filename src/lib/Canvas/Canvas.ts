import { Vector } from "../Vector/Vector";

export class Canvas{
    public dom:HTMLCanvasElement=document.createElement("canvas");
    public ctx:CanvasRenderingContext2D=this.dom.getContext("2d")!;
    constructor(parent:HTMLElement=document.body){
        parent.appendChild(this.dom);
        this.dom.width=300;
        this.dom.height=300;
    }
    public grid(){
        const rotation_x = new Vector(0 * (180/Math.PI),0 * (180/Math.PI),45 * (180/Math.PI));
        const scale = 20;
        const x_lines = [];
        const y_lines = [];
        for(let i=0;i<this.dom.height;i+=scale){
            x_lines.push({
                start:new Vector(0,i,0),
                end:new Vector(this.dom.width,i,0)
            })

            y_lines.push({
                start:new Vector(i,0,0),
                end:new Vector(i,this.dom.height,0)
            })
            
        }
        for(let i=0;i<x_lines.length;i++){
            this.ctx.beginPath();
            const x_start = x_lines[i].start.scale(scale).getRotated(rotation_x);
            const x_end = x_lines[i].end.scale(scale).getRotated(rotation_x);
            this.ctx.moveTo(x_start.components[0],x_end.components[1]);
            this.ctx.lineTo(x_lines[i].end.components[0],x_lines[i].end.components[1]);
            this.ctx.strokeStyle = "rgba(0,0,0,0.2)";
            this.ctx.stroke();
            this.ctx.closePath();
        }
        for(let i=0;i<y_lines.length;i++){
            this.ctx.beginPath();
            const y_start = y_lines[i].start.scale(scale).getRotated(rotation_x);
            const y_end = y_lines[i].end.scale(scale).getRotated(rotation_x);
            this.ctx.moveTo(y_start.components[0],y_start.components[1]);
            this.ctx.lineTo(y_end.components[0],y_end.components[1]);
            this.ctx.strokeStyle = "rgba(0,0,0,0.2)";
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
    public clear(){
        this.ctx.clearRect(0,0,this.dom.width,this.dom.height);
    }
}