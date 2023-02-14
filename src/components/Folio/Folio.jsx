import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Folio = () => {
    const [display, setDisplay] = useState("Home");

    const updateDisplay = (page) => { setDisplay(page); }

    return(
        <div id="Folio">
            <Navbar update={updateDisplay}/>
        </div>
    );
}

export default Folio;