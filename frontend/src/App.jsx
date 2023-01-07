import { Route, Routes } from "react-router-dom";
import ImagesPage from "./pages/ImagesPage";

function App() {
  return (
    <Routes>
      <Route path="/images" element={<ImagesPage />} />
    </Routes>
  );
}

export default App;
