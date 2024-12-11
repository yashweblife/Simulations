export default class Canvas{
    c:CanvasRenderingContext2D
    width:number=300;
    height:number=300;
    constructor(c:HTMLCanvasElement){
        this.c=c.getContext("2d")!;
        c.width=300;
        c.height=300;
    }
    arc(x:number,y:number,radius:number, stroke:boolean, color:string="red"){
        this.c.beginPath();
        this.c.arc(x,y,radius,0,Math.PI*2);
        if(stroke){
            this.c.strokeStyle=color;
            this.c.stroke();
        }else{
            this.c.fillStyle=color;
            this.c.fill();
        }
        this.c.closePath();
    }
}