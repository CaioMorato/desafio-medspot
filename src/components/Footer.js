// vitals
import { useContext } from 'react';
// components
import themeToggle from '../helpers/themeToggle';
// context
import MyContext from '../context/MyContext';

function Footer() {
  const { darkTheme } = useContext(MyContext);
  return (
    <footer id="footer" className={`${themeToggle('footer', darkTheme)} mt-10 p-4 px-6`}>
      <p className="text-center text-neutral-content">
        Feito por{' '}
        <a
          className="underline"
          href="https://caiomorato.github.io"
          target="_blank"
          rel="noreferrer"
        >
          Caio Morato
        </a>{' '}
        em um desafio técnico para Medspot&trade;
      </p>
    </footer>
  );
}

export default Footer;
