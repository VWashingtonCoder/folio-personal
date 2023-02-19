import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from "../useDarkMode";
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../../global';
import "./Folio.css";
import Navbar from "../Navbar/Navbar";
import ThemePanel from "../ThemePanel/ThemePanel";
import Home from "../Home/Home";

const Folio = () => {
    const [display, setDisplay] = useState("home");
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;

    const updateDisplay = (page) => { setDisplay(page) };
    
    return(
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <div id="Folio">
                    <Navbar update={updateDisplay}/>
                    <ThemePanel theme={theme} update={toggleTheme}/>
                    { display === "home" && (<Home />)}
                </div>
            </>    
        </ThemeProvider>
        
    );
}

export default Folio;