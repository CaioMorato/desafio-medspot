// styles
import medspotLogo from '../images/medspot-logo.png'

function Header() {
  return (
    <header id="header" className="flex items-center justify-between">
      <div className="logo-container">
        <img src={medspotLogo} width="64px" alt="Logo da empresa Medspot" />
      </div>
      <div className="company-name">Medspot</div>
      <div className="navigation-container">
        <ul className="flex">
          <li>
            Marcar consulta
          </li>
          <li>Visualizar consulta</li>
        </ul>
      </div>
    </header>
  )
}

export default Header