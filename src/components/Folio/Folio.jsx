import { useState } from "react";
import "./Folio.css";
import Navbar from "../Navbar/Navbar";
import ThemePanel from "../ThemePanel/ThemePanel";

const Folio = () => {
    const [display, setDisplay] = useState("Home");
    const [theme, setTheme] = useState("light");

    const updateDisplay = (page) => { setDisplay(page) };
    const updateTheme = (theme) => { setTheme(theme) };

    return(
        <div id="Folio">
            <Navbar update={updateDisplay}/>
            <ThemePanel theme={theme} update={updateTheme}/>
        </div>
    );
}

export default Folio;