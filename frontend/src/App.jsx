import { Route, Routes } from "react-router-dom";
import ImagesUploadPage from "./pages/ImagesUploadPage";
import ImagesPage from "./pages/ImagesPage";
import ImagesByProductIdPage from "./pages/ImagesByProductIdPage";

function App() {
  return (
    <Routes>
      <Route path="/images-upload" element={<ImagesUploadPage />} />
      <Route path="/images" element={<ImagesPage />} />
      <Route path="/images-product" element={<ImagesByProductIdPage />} />
    </Routes>
  );
}

export default App;
