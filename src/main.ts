import { Canvas, Vector } from "./lib";
import { PhysicsObject } from "./lib/PhysicsObject/PhysicsObject";

const canvas = new Canvas();

const body = new PhysicsObject();
body.position = new Vector(100, 100);
const shape = []
for (let i = 0; i < Math.PI*2; i+=0.1) {
    shape.push(new Vector(Math.cos(i)*10, Math.sin(i)*10));
}
body.setShape(shape);
const body2 = new PhysicsObject();
body2.position = new Vector(200, 200);
const shape2 = [
new Vector(-1, -1),
new Vector(1, -1),
new Vector(1, 1),
new Vector(-1, 1),
new Vector(-1, -1)]

body2.setShape(shape2);
body2.color="#00ff00";
body2.scale=new Vector(10, 10);
const animation = () => {
    canvas.clear();
    body.rotation.add(new Vector(0.1, 0.1));
    // body.addForce(new Vector((Math.random()-0.5), (Math.random()-0.5)));
    // body2.addForce(new Vector((Math.random()-0.5)*2, (Math.random()-0.5)*2));
    body.update(canvas.ctx);
    body2.update(canvas.ctx);
    requestAnimationFrame(animation);
}

animation();