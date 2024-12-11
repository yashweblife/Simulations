import { useEffect, useRef, useState } from "react";
import Canvas from "./lib/Canvas";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  
  useEffect(()=>{
    if(canvasRef.current){
      setCanvas(new Canvas(canvasRef.current));
    }
  },[canvasRef])
  return (
    <div className="App">
      <canvas ref={canvasRef} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.2)"}}></canvas>
    </div>
  )
}

export default App
