import  React,{ useContext } from "react";


import ThemeContext from "./ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)
    return(
        <div onClick= {()=>{
            setThemeMode(themeMode === "light" ? "dark" : "light");
            }}
        >
            <span>
                {themeMode === "light" ? "Turn Off" : "Lights On"}
            </span>
        </div>
    );
};


export default ThemeToggler;



// import React, { useContext } from "react";
// import ThemeContext from "./ThemeContext";

// const ThemeToggler = () => {
//     const [themeMode,setThemeMode] = useContext(ThemeContext)

//     return(
//         <div onClick={ () => {
//             setThemeMode(themeMode === "light" ?  "dark" : "light" )
//         }}>
//         <span>{themeMode === "light" ? "Turn off" : "Lights On"}</span>
//         <h1>Togggler</h1>
//         </div>
//     )
// };

// export default ThemeToggler;
