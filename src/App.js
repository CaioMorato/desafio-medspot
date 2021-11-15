// vitals
import { useContext } from 'react';
// components
import Header from './components/Header';
import BookAppoint from './components/BookAppoint';
import CheckAppoint from './components/CheckAppoint';
import Footer from './components/Footer';
import themeToggle from './helpers/themeToggle';
// context
import MyContext from './context/MyContext';

function App() {
  const { darkTheme } = useContext(MyContext);
  return (
    <main className={`${themeToggle('main', darkTheme)}`}>
      <Header />
      <h2 className={`${themeToggle('text', darkTheme)} text-center text-xl font-bold my-7`}>
        Marcar Consulta
      </h2>
      <BookAppoint />
      <h2 className={`${themeToggle('text', darkTheme)} text-center text-xl font-bold my-10`}>
        Visualizar Consultas
      </h2>
      <CheckAppoint />
      <Footer />
    </main>
  );
}

export default App;
