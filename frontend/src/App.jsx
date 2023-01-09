import { Route, Routes } from "react-router-dom";
import ImagesUploadPage from "./pages/ImagesUploadPage";
import ImagesByProductIdPage from "./pages/ImagesByProductIdPage";

function App() {
  return (
    <Routes>
      <Route path="/images-upload" element={<ImagesUploadPage />} />
      <Route path="/images" element={<ImagesByProductIdPage />} />
    </Routes>
  );
}

export default App;
