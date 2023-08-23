export class Vector{
    public components:number[]=[];
    constructor(...components:number[]){
        this.components=components;
    }
    add(vector:Vector){
        for(let i=0;i<this.components.length;i++){
            this.components[i]+=vector.components[i];
        }
        return this;
    }
    getAdd(vector:Vector){
        const components=this.components.map((component, index)=>component+vector.components[index]);
        return new Vector(...components);
    }
    sub(vector:Vector){
        for(let i=0;i<this.components.length;i++){
            this.components[i]-=vector.components[i];
        }
        return this;
    }
    scale(scalar:number){
        const components=this.components.map((component)=>component*scalar);
        return this
    }
    getScaleX(scalar:number){
        return new Vector(this.components[0]*scalar, this.components[1]);
    }
    getScaleY(scalar:number){
        return new Vector(this.components[0], this.components[1]*scalar);
    }
    getRotated(angle:Vector){
        const x=this.components[0];
        const y=this.components[1];
        const cos=Math.cos(angle.components[0]);
        const sin=Math.sin(angle.components[1]);
        return new Vector(x*cos-y*sin, x*sin+y*cos);
    } 
}