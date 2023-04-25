import { useState } from "react";
import ImageCropper from "./components/ImageCropper";

function App() {
  const [uploadImage, setUploadImage] = useState("");
  const handleUploadImage = (image: string) => setUploadImage(image);

  return (
    <div className="App">
      <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
        <button>이미지 업로드</button>
      </ImageCropper>
    </div>
  );
}

export default App;
