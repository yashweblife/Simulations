import { useCallback, useEffect, useRef, useState } from "react";
import Ball from "./lib/Ball";
import Canvas from "./lib/Canvas";

function App() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [canvas, setCanvas] = useState<Canvas | null>(null);
	const balls: Ball[] = new Array(50).fill(0).map(() => new Ball());
	useEffect(() => {
		if (canvasRef.current) {
			setCanvas(new Canvas(canvasRef.current));
		}
		animation();
	}, [canvasRef])
	let timer = 0;
	const animation = useCallback(() => {
		if (!canvas) return;
		canvas.clear();
		for (let i = 0; i < balls.length; i++) {
			const b = balls[i];
			b.draw(canvas).bound().update();
		}
		timer++;
		requestAnimationFrame(animation);
	}, [])

	return (
		<div className="App">
			<canvas ref={canvasRef} style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}></canvas>
		</div>
	)
}

export default App
