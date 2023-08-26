import { Canvas } from "./lib";
import { PhysicsObject } from "./lib/PhysicsObject/PhysicsObject";

const canvas = new Canvas();

const box = PhysicsObject.BOX();
box.position.components[0] = 150;
box.position.components[1] = 150;
box.scale.components[0] = 10;
box.scale.components[1] = 10;
box.rotation.components[0] = 0;
box.rotation.components[1] = 0;

const ball = PhysicsObject.CIRCLE();
ball.position.components[0] = 40;
ball.position.components[1] = 40;
ball.scale.components[0] = 40;
ball.scale.components[1] = 40;


const animation = () => {
    canvas.clear();
    canvas.grid();
    // box.update(canvas.ctx);
    // ball.update(canvas.ctx);
    requestAnimationFrame(animation);
}

animation();