import React, { useState } from "react";
import ThemeContext from "./ThemeSwitcherComponents/ThemeContext";
import Header from "./ThemeSwitcherComponents/Header";
import HeroSection from "./ThemeSwitcherComponents/HeroSection";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <Header />
      <HeroSection />
    </ThemeContext.Provider>
  );
}

export default App;
