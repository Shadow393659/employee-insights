import { useRef, useEffect } from "react";

function useCamera() {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    startCamera();
  }, []);

  return {
    videoRef,
  };
}

export default useCamera;
