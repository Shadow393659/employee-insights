import { useRef, useState } from "react";

function SignatureCanvas({ photo, onSave }) {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  // Get canvas context
  const getCtx = () => canvasRef.current.getContext("2d");

  // Start drawing
  const startDrawing = (x, y) => {
    const ctx = getCtx();
    ctx.beginPath();
    ctx.moveTo(x, y);
    setDrawing(true);
  };

  // Drawing
  const draw = (x, y) => {
    if (!drawing) return;
    const ctx = getCtx();
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  // Stop drawing
  const stopDrawing = () => {
    setDrawing(false);
  };

  // Mouse event handlers
  const handleMouseDown = (e) =>
    startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  const handleMouseMove = (e) =>
    draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  const handleMouseUp = stopDrawing;

  // Touch event handlers
  const handleTouchStart = (e) => {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    startDrawing(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    draw(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    stopDrawing();
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
        className="border rounded touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
