export async function mergeImages(photo, signature) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    const sign = new Image();

    img.src = photo;
    sign.src = signature;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      sign.onload = () => {
        ctx.drawImage(sign, 0, img.height - 150, 300, 150);

        const mergedImage = canvas.toDataURL("image/png");

        resolve(mergedImage);
      };
    };
  });
}

