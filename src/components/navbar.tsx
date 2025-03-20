"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaDownload, FaGithub, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-2 shadow-md"
          : "bg-white dark:bg-gray-900 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <FaDownload className="text-primary text-xl" />
          <span className="font-bold text-lg md:text-xl">Videoİndir</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/oktayyavuz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub className="text-xl" />
          </Link>

          <button
            onClick={toggleDarkMode}
            className="hover:text-primary transition-colors focus:outline-none"
            aria-label={isDarkMode ? "Açık moda geç" : "Koyu moda geç"}
          >
            {isDarkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
} 