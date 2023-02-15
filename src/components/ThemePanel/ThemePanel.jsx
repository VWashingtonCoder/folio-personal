import { useState } from "react";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";

const ThemePanel = (props) => {
  const { theme, update } = props;
  const [open, setOpen] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    const value = e.target.value;
    value === "tab" ? setOpen(!open) : update(value);

  };
  
  return (
    <div id="ThemePanel">
      <span>Change Theme</span>
      <div className="btn-group">
        {["light", "dark"].map((btn) => (
          <button
            key={`${btn}-btn`}
            value={btn}
            className={`switcher-btn ${theme === btn ? "active" : ""}`}
            onClick={onClick}
          >
            {btn}
          </button>
        ))}
      </div>
      <button className="theme-tab" value="tab" onClick={onClick}>
        {open ? <BsChevronBarRight /> : <BsChevronBarLeft />}
      </button>
    </div>
  );
};

export default ThemePanel;
