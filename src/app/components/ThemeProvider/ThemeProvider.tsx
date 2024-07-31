'use client'; // Declares that this file is a client-side module

import { Children, useEffect, useState } from "react"; // Imports Children (incorrectly imported), useEffect, and useState from React
import ThemeContext from "@/Contexte/ThemeContext"; // Imports ThemeContext from a local path

const ThemeProvider = ({children}:{children: React.ReactNode})=> { // Declares a functional component ThemeProvider that takes a prop Children of type React.ReactNode
    const themeFromStorage = typeof localStorage !== 'undefined' && localStorage.getItem("hotel-theme") ? JSON.parse(localStorage.getItem('hotel-theme')!) : false; // Retrieves the theme from localStorage if it exists, otherwise defaults to false
    const [rendrerComponent,setRenderComponent]=useState(false);
    const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage); // Initializes darkTheme state with the value from localStorage

        useEffect(()=>{
        setRenderComponent(true); 
        },[]);
        if(!rendrerComponent) return <></>;
        return(
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}> {/* // Provides the darkTheme and setDarkTheme to the context */}
        <div className={`${darkTheme ? "dark" : ""} min-h-screen`}> {/* // Applies the "dark" class based on darkTheme and ensures the div takes at least the full height of the screen */}
            <div className="dark:text-white dark:bg-black text-[#1E1E1E]">  {/* Sets text and background colors based on the theme */}
                {children} {/* // Renders the children components passed to ThemeProvider */}
            </div>
        </div>
    </ThemeContext.Provider>
        );
};


export default ThemeProvider; // Exports the ThemeProvider component as the default export
