import { useRef, useState } from "react";
import SignatureCanvas from "../components/SignatureCanvas";

function Details() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);
  const [mergedImage, setMergedImage] = useState(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    videoRef.current.srcObject = stream;
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(videoRef.current, 0, 0, 500, 300);

    const image = canvas.toDataURL("image/png");

    setPhoto(image);
  };

  const mergeImages = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 400;

    const ctx = canvas.getContext("2d");

    const img1 = new Image();
    const img2 = new Image();

    img1.src = photo;
    img2.src = signature;

    img1.onload = () => {
      ctx.drawImage(img1, 0, 0, 500, 300);

      img2.onload = () => {
        ctx.drawImage(img2, 0, 300, 500, 100);

        const merged = canvas.toDataURL("image/png");

        setMergedImage(merged);
      };
    };
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Identity Verification</h1>

      {!photo && (
        <>
          <video ref={videoRef} autoPlay className="border" width="500" />

          <div className="space-x-2">
            <button
              onClick={startCamera}
              className="bg-blue-500 text-white px-4 py-2"
            >
              Start Camera
            </button>

            <button
              onClick={capturePhoto}
              className="bg-green-500 text-white px-4 py-2"
            >
              Capture
            </button>
          </div>
        </>
      )}

      <canvas ref={canvasRef} width={500} height={300} className="hidden" />

      {photo && !mergedImage && (
        <SignatureCanvas
          photo={photo}
          onSave={(sig) => {
            setSignature(sig);
          }}
        />
      )}

      {signature && !mergedImage && (
        <button
          onClick={mergeImages}
          className="bg-purple-600 text-white px-4 py-2"
        >
          Merge Photo + Signature
        </button>
      )}

      {mergedImage && (
        <div>
          <h2 className="font-bold mb-2">Final Audit Image</h2>
          <img src={mergedImage} className="border" />
        </div>
      )}
    </div>
  );
}

export default Details;
