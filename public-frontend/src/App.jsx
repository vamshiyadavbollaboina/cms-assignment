import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DynamicPage from "./pages/DynamicPage";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<DynamicPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/:slug" element={<DynamicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
