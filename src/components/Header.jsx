const Header = ({ onNavigate }) => {
  const handleNavigation = (ev, page) => {
    ev.preventDefault();
    onNavigate(page);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#" onClick={(ev) => handleNavigation(ev, 'digital')}>Home</a></li>
          <li><a href="#" onClick={(ev) => handleNavigation(ev, 'analogue')}>Analogue Clock</a></li>
          <li><a href="#" onClick={(ev) => handleNavigation(ev, 'staffList')}>Staff List</a></li>
        </ul>
      </nav>
      <h1>
        <span className="l1">B</span><span className="l2">u</span>
        <span className="l3">s</span><span className="l4">y</span>
        <span className="l5">.</span><span className="l6">c</span>
        <span className="l7">o</span><span className="l8">m</span>
      </h1>
    </header>
  );
};

export default Header;
