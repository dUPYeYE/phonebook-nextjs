'use client';

import React, { useState } from 'react';

import Navbar from './navbar';
import Partners from "./pages";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return(
    <div className={darkMode ? "dark" : ""}>
      <header>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main>
        <Partners darkMode={darkMode} />
    </main>
    </div>
  );
}
