// components
import Header from './components/Header';
import BookAppoint from './components/BookAppoint';
import CheckAppoint from './components/CheckAppoint';
import Footer from './components/Footer';

function App() {
  return (
    <main className="App">
      <Header />
      <h2 className="text-center text-xl font-bold my-7 text-color">Marcar Consulta</h2>
      <BookAppoint />
      <h2 className="text-center text-xl font-bold my-10 text-color">Visualizar Consultas</h2>
      <CheckAppoint />
      <Footer />
    </main>
  );
}

export default App;
