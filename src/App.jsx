// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllTemplates from "./pages/AllTemplates";
import SavedFortunes from "./pages/SavedFortunes";
import Feedback from "./pages/Feedback";
import FeedbackList from "./pages/FeedbackList";
import Navbar from "./components/Navbar";
import CreateFortuneTemplate from "./pages/CreateFortuneTemplate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<AllTemplates />} />
        <Route path="/saved" element={<SavedFortunes />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedbacks" element={<FeedbackList />} />
        <Route path="/create" element={<CreateFortuneTemplate />} />

        {/* <Route path="/About" element={<AboutComponent />} /> */}
        {/* <Route path="*" element={<NotFoundComponent />} /> */}
      </Routes>
    </>
  );
}

export default App;
