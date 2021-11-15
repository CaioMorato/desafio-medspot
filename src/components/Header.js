// vitals
import { useContext, useState } from 'react';
// components
import themeToggle from '../helpers/themeToggle';
// context
import MyContext from '../context/MyContext';
// styles
import medspotLogo from '../images/medspot-no-bg.png';
import { BsList, BsSunFill, BsFillMoonFill } from 'react-icons/bs';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { darkTheme, setDarkTheme } = useContext(MyContext);
  return (
    <header id="header" className="flex items-center justify-between mx-4 mb-5">
      <div className="logo-container md:w-52">
        <img
          src={medspotLogo}
          width="64px"
          alt="Logo da minha futura empresa empresa do coração <3"
        />
      </div>
      <div className="company-name md:w-52">
        <h1 className={`${themeToggle('text', darkTheme)} text-2xl font-bold text-center`}>
          Medspot
        </h1>
      </div>
      <div className="navigation-container">
        <nav id="nav" className="flex flex-row items-center">
          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <BsList size="2rem" />
          </button>
          <ul id="menu" className={`${showMenu ? 'showMenu' : 'hideMenu'}`}>
            <li className={`${themeToggle('text', darkTheme)}`}>
              <a href="#marcar">Marcar</a>
            </li>
            <li className={`${themeToggle('text', darkTheme)}`}>
              <a href="#visualizar">Visualizar</a>
            </li>
          </ul>
          <div className="toggle-container ml-6">
            <input
              type="checkbox"
              checked={darkTheme}
              class="toggle-checkbox"
              id="chk"
              onClick={() => setDarkTheme(!darkTheme)}
            />
            <label className="toggle-label" for="chk">
              <BsSunFill fill="#f39c12" size="10px" />
              <BsFillMoonFill fill="#f1c40f" size="10px" />
              <div className="toggle-ball"></div>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
