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
    getRotatedX(angle:number){
        const x=this.components[0];
        const y=this.components[1];
        const z=this.components[2] || 0;
        const cos=Math.cos(angle);
        const sin=Math.sin(angle);
        return new Vector(x, y*cos-z*sin, y*sin+z*cos);
    }
    getRotatedY(angle:number){
        const x=this.components[0];
        const y=this.components[1];
        const z=this.components[2] || 0;
        const cos=Math.cos(angle);
        const sin=Math.sin(angle);
        return new Vector(x*cos+z*sin, y, -x*sin+z*cos);
    }
    getRotated(angle:Vector){
        const x=this.components[0];
        const y=this.components[1];
        const z=this.components[2] || 0;        
        const cos_x=Math.cos(angle.components[0]);
        const sin_x=Math.sin(angle.components[0]);
        const cos_y=Math.cos(angle.components[1]);
        const sin_y=Math.sin(angle.components[1]);
        const cos_z=Math.cos(angle.components[2]);
        const sin_z=Math.sin(angle.components[2]);
        const x_prime = x*cos_y*cos_z + y*(cos_z*sin_x*sin_y-cos_x*sin_z) + z*(cos_x*cos_z*sin_y+sin_x*sin_z);
        const y_prime = x*cos_y*sin_z + y*(cos_x*cos_z+sin_x*sin_y*sin_z) + z*(-cos_z*sin_x+cos_x*sin_y*sin_z);
        const z_prime = -x*sin_y + y*cos_y*sin_x + z*cos_x*cos_y;
        return new Vector(x_prime, y_prime, z_prime);
    } 
}