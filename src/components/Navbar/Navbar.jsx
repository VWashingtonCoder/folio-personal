const Navbar = (props) => {
    const { update } = props;
  const navBtns = ["Home", "About", "Contact"];
  
  const onClick = (e) => {
    e.preventDefault();
    update(e.target.value);
  }

  return (
    <div id="Navbar">
      <div className="brand-title">
        <h2>folio.AndreWashington</h2>
      </div>
      <div className="navbar-nav">
        {navBtns.map((btn) => (
          <button key={`${btn} linkBtn`} value={btn} onClick={onClick}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
