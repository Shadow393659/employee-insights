import { useEffect, useRef } from "react";

function CameraCapture({ onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;
    };

    startCamera();
  }, []);

  const capture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");

    onCapture(image);
  };

  return (
    <div className="space-y-4">
      <video ref={videoRef} autoPlay className="w-full border rounded" />

      <button
        onClick={capture}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Capture Photo
      </button>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}

export default CameraCapture;
