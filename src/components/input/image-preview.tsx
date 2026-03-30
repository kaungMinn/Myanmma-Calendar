import { useEffect, useState } from "react";

import { imgURL } from "@/utils/data";

function ImagePreview({ image, className }: { image: File | string | null | undefined; className?: string }) {
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof image === "string") {
      setImgUrl(imgURL(image, "small"));
      return;
    }

    if (image instanceof File) {
      const objectUrl = URL.createObjectURL(image);
      setImgUrl(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }

    setImgUrl("");
  }, [image]);

  return (
    <img
      src={imgUrl}
      alt="Image"
      className={className || "w-10 h-10 rounded-md"}
    />
  );
}

export default ImagePreview;
