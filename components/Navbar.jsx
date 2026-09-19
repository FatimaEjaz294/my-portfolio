
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#top" className="logo">
        MyPortfolio
      </a>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#top" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </header>
  );
}

