import { useState } from "react";
import imageCompression from "browser-image-compression";

const useImageCompress = () => {
  const [isLoading, setIsLoading] = useState(false);

  const compressImage = async (imageFile: File) => {
    if (isLoading) return;

    setIsLoading(true);

    console.log(`원본 이미지 사이즈 : ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);

      console.log(
        `압축된 이미지 사이즈 : ${compressedFile.size / 1024 / 1024} MB`
      );

      setIsLoading(false);

      return compressedFile;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return { compressImage, isLoading };
};

export default useImageCompress;
