import { useState } from "react";
import "./Folio.css";
import Navbar from "../Navbar/Navbar";

const Folio = () => {
    const [display, setDisplay] = useState("Home");
    const [theme, setTheme] = useState("light");

    const updateDisplay = (page) => { setDisplay(page); }

    return(
        <div id="Folio">
            <Navbar update={updateDisplay}/>
        </div>
    );
}

export default Folio;