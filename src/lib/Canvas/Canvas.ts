export class Canvas{
    public dom:HTMLCanvasElement=document.createElement("canvas");
    public ctx:CanvasRenderingContext2D=this.dom.getContext("2d")!;
    constructor(parent:HTMLElement){
        parent.appendChild(this.dom);
        this.dom.width=300;
        this.dom.height=300;
    }
}