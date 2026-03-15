import { useRef, useState } from "react";

function SignatureCanvas({ photo, onSave }) {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  const startDrawing = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;

    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const handleSave = () => {
    const signature = canvasRef.current.toDataURL("image/png");
    onSave(signature);
  };

  return (
    <div className="space-y-4">
      {/* Captured photo */}
      <img src={photo} alt="employee" className="w-full border rounded" />

      {/* Signature canvas */}
      <canvas
        ref={canvasRef}
        width={500}
        height={200}
        className="border rounded"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      />

      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Signature
      </button>
    </div>
  );
}

export default SignatureCanvas;
