// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllTemplates from "./pages/AllTemplates";
import SavedFortunes from "./pages/SavedFortunes";
import CreateFortune from "./pages/CreateFortune";
import Navbar from "./components/Navbar";
import GoogleAuthPage from "./pages/GoogleAuthPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<AllTemplates />} />
        <Route path="/saved" element={<SavedFortunes />} />
        <Route path="/create" element={<CreateFortune />} />
      </Routes>
    </>
  );
}

export default App;
