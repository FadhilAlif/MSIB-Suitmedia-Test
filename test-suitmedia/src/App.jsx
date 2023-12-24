import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ideas from "./pages/Ideas";
import Blank from "./pages/Blank";
// import Ideas from "./pages/Ideas";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Ideas />} />
        <Route path="/work" element={<Blank />} />
        <Route path="/about" element={<Blank />} />
        <Route path="/services" element={<Blank />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/carrers" element={<Blank />} />
        <Route path="/contact" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
