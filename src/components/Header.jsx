// styles
import medspotLogo from '../images/medspot-logo.png'

function Header() {
  return (
    <header id="header" className="flex items-center justify-between mx-5">
      <div className="logo-container">
        <img src={medspotLogo} width="64px" alt="Logo da empresa Medspot" />
      </div>
      <div className="company-name">Medspot</div>
      <div className="navigation-container">
        <ul id="menu" className="flex flex-col md:flex-row md:gap-x-10">
          <li>
            Marcar
          </li>
          <li>Visualizar</li>
        </ul>
      </div>
    </header>
  )
}

export default Header