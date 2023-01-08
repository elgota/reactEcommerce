import { Route, Routes } from "react-router-dom";
import UploadImagesPage from "./pages/UploadImagesPage";
import ImagesPage from "./pages/ImagesPage";
import ImagesByProductIdPage from "./pages/ImagesByProductIdPage";

function App() {
  return (
    <Routes>
      <Route path="/upload-images" element={<UploadImagesPage />} />
      <Route path="/images" element={<ImagesPage />} />
      <Route path="/images-product" element={<ImagesByProductIdPage />} />
    </Routes>
  );
}

export default App;
