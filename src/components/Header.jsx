// vitals
import { useState } from 'react';
// styles
import medspotLogo from '../images/medspot-no-bg.png';
import { BsList } from 'react-icons/bs';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="header" className="flex items-center justify-between mx-5">
      <div className="logo-container">
        <img src={medspotLogo} width="64px" alt="Logo da empresa Medspot" />
      </div>
      <div className="company-name">Medspot</div>
      <div className="navigation-container">
        <nav id="nav">
          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <BsList size="2rem"/>
          </button>
        <ul id="menu" className={`${showMenu ? 'showMenu' : "hideMenu"}`}>
          <li>
            Marcar
          </li>
          <li>
            Visualizar
          </li>
        </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
