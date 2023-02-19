import "./Navbar.css"; 

const Navbar = (props) => {
  const { update } = props;
  const navBtns = ["Home", "About", "Contact"];

  const changePage = (e) => {
    e.preventDefault();
    update(e.target.value);
  };

  return (
    <div id="Navbar">
      <div className="brand-title">
        <h2>folio.AndreWashington</h2>
      </div>
      <div className="navbar-nav">
        {navBtns.map((btn) => (
          <button
            key={`${btn}-btn`}
            className="link-btn nav-btn"
            value={btn}
            onClick={changePage}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
