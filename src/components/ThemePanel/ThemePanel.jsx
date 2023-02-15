import { useState } from "react";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";
import "./ThemePanel.css"

const ThemePanel = (props) => {
  const { theme, update } = props;
  const [open, setOpen] = useState(false);

  const changeTheme = (e) => {
    e.preventDefault();
    update(e.target.value);
  };

  const openTab = (e) => {
    e.preventDefault();
    setOpen(!open);
  }
  
  return (
    <div id="ThemePanel" className={open && 'open'}>
      <span>Change Theme</span>
      <div className="btn-group">
        {["light", "dark"].map((btn) => (
          <button
            key={`${btn}-btn`}
            value={btn}
            className={`switcher-btn ${theme === btn ? "active" : ""}`}
            onClick={changeTheme}
          >
            {btn}
          </button>
        ))}
      </div>
      <button className="theme-tab link-btn" onClick={openTab}>
        {open 
          ? <BsChevronBarRight /> 
          : <BsChevronBarLeft />
        }
      </button>
    </div>
  );
};

export default ThemePanel;
