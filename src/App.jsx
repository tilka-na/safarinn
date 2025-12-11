import React from "react";
import Home from "./pages/home.jsx";
import Lister from "./pages/lister.jsx";
import Apropos from "./pages/apropos.jsx";
import Contact from "./pages/contact.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import RoomsDetails from "./pages/RoomDetails.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<AllHotels />} />
        <Route path="/hotels/:id" element={<RoomsDetails />} />
        <Route path="/add-property" element={<Lister />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

