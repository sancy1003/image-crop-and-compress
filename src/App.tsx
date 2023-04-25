import { useState } from "react";
import ImageCropper from "./components/ImageCropper";

function App() {
  const [uploadImage, setUploadImage] = useState("");
  const handleUploadImage = (image: string) => setUploadImage(image);

  return (
    <div className="App">
      <div className="profile">
        {uploadImage ? (
          <img src={uploadImage} />
        ) : (
          <div className="cover">이미지가 없어요.</div>
        )}
        <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
          <button className="image-upload-button">📷</button>
        </ImageCropper>
      </div>
    </div>
  );
}

export default App;
