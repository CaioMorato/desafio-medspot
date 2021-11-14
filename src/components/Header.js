// vitals
import { useState } from 'react';
// styles
import medspotLogo from '../images/medspot-no-bg.png';
import { BsList } from 'react-icons/bs';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="header" className="flex items-center justify-between mx-4 mb-5">
      <div className="logo-container">
        <img
          src={medspotLogo}
          width="64px"
          alt="Logo da minha futura empresa empresa do coração <3"
        />
      </div>
      <div className="company-name">
        <h1 className="text-2xl font-bold text-center text-color">Medspot</h1>
      </div>
      <div className="navigation-container">
        <nav id="nav">
          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <BsList size="2rem" />
          </button>
          <ul id="menu" className={`${showMenu ? 'showMenu' : 'hideMenu'}`}>
            <li>
              <a href="#marcar">Marcar</a>
            </li>
            <li>
              <a href="#visualizar">Visualizar</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
