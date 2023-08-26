import { Vector } from "../Vector/Vector";

export class Database{
    public x_titles:string[]=[];
    public y_titles:string[]=[];
    public data:any[][]=[];
    public name:string="";
    constructor(size:Vector=new Vector(2,10)){
        this.data=new Array(size.components[0]);
        for(let i=0;i<this.data.length;i++){
            this.data[i]=new Array(size.components[1]);
        }
    }
    public addXTitle(title:string){
        this.x_titles.push(title);
    }
    public addYTitle(title:string){
        this.y_titles.push(title);
    }

}