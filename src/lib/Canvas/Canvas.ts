export class Canvas{
    public dom:HTMLCanvasElement=document.createElement("canvas");
    public ctx:CanvasRenderingContext2D=this.dom.getContext("2d")!;
    constructor(parent:HTMLElement=document.body){
        parent.appendChild(this.dom);
        this.dom.width=300;
        this.dom.height=300;
    }
    public clear(){
        this.ctx.clearRect(0,0,this.dom.width,this.dom.height);
    }
}