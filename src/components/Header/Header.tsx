import './Header.scss';

function Header() {
  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <a className="menu-link menu-link--selected" href="#header">
          Accueil
        </a>
        <a className="menu-link" href="#header">
          React
        </a>
        <a className="menu-link" href="#header">
          Angular
        </a>
        <button className="menu-btn" type="button">
          Activer le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
