import { useEffect, useState } from "react";
import ImageCropper from "./components/ImageCropper";
import useImageCompress from "./hook/useImageCompress";
import { dataURItoFile } from "./utils/common";

function App() {
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const { isLoading: isCompressLoading, compressImage } = useImageCompress();

  const handleUploadImage = (image: string) => setUploadImage(image);

  const handleCompressImage = async () => {
    if (!uploadImage) return;

    const imageFile = dataURItoFile(uploadImage);

    const compressedImage = await compressImage(imageFile);

    // 이미지 서버 저장 로직
    if (!compressedImage) return;
    const imageUrl = URL.createObjectURL(compressedImage);
    setCompressedImage(imageUrl);
  };

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  return (
    <div className="App">
      <div className="profile">
        {compressedImage ? (
          <img src={compressedImage} />
        ) : (
          <div className="cover">
            {isCompressLoading ? "이미지 압축 중.." : "이미지가 없어요."}
          </div>
        )}
        <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
          <button className="image-upload-button">📷</button>
        </ImageCropper>
      </div>
    </div>
  );
}

export default App;
