import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ContactUs from "./pages/ContactUs";
import WeatherWidget from "./components/WeatherWidget";

function App() {
  return (
    <Router>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Group 1.png')",
        }}
      >
        <Header />
        <WeatherWidget />

        {/* เนื้อหาของหน้า */}
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // จัดการสถานะเมนู
  const location = useLocation(); // ตรวจสอบเส้นทางปัจจุบัน

  return (
    <header className="bg-opacity-75 text-black p-6 md:p-12 flex justify-between items-center relative">
      {/* ชื่อเว็บไซต์ */}
      <h1 className="text-2xl md:text-5xl font-semibold ">Titiwat Chuyoung</h1>

      {/* Hamburger Menu Button */}
      <button
        className="block md:hidden text-3xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex absolute md:relative top-full md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-14 z-50 mr-8`}
      >
        <Link
          to="/"
          className={`block md:inline text-xl md:text-2xl ${
            location.pathname === "/"
              ? "text-blue-500 font-bold"
              : "hover:text-blue-300 text-black"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/detail"
          className={`block md:inline text-xl md:text-2xl ${
            location.pathname === "/detail"
              ? "text-blue-500 font-bold"
              : "hover:text-blue-300 text-black"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Detail
        </Link>
        <Link
          to="/contact"
          className={`block md:inline text-xl md:text-2xl ${
            location.pathname === "/contact"
              ? "text-blue-500 font-bold"
              : "hover:text-blue-300 text-black"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default App;
