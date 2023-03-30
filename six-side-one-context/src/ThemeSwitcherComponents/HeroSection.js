import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";


const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
const [themeMode, setThemeMode] = useContext(ThemeContext)
  return (
    
    <div style={{
        padding:"1rem",
        backgroundColor:`${currentTheme.backgroundColor}`,
        color:`${currentTheme.textColor}`,
        textAlign:"center"
    }}>
      <h1>Context API theme Toggler</h1>
      <p>This is a nice Content</p>
      <button style={{
        backgroundColor:"#26ae60",
        padding:"10px 150px",
        fontSize:"20px",
        color:"#FFF",
        border:`${currentTheme.border}`
      }} onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}>{themeMode === "light" ? "Turn Off" : "Lights On"}</button>
    </div>
  );
};

export default HeroSection;
