import React from "react";
import Home from "./pages/home.jsx";
import Lister from "./pages/lister.jsx";
import Apropos from "./pages/apropos.jsx";
import Contact from "./pages/contact.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Temporary placeholder pages (Personne 2 & 3 will replace later)
function Hotels() {
  return <h1 className="p-20 text-3xl">Page Hôtels</h1>;
}


export default function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/add-property" element={<Lister />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

