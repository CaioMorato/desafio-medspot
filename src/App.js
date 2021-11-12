// components
import Header from './components/Header';
import BookAppoint from './components/BookAppoint';
import CheckAppoint from './components/CheckAppoint';

function App() {
  return (
    <main className="App">
      <Header />
      <h2 className="text-center">Marcar Consulta</h2>
      <BookAppoint />
      <h2 className="text-center">Visualizar Consultas</h2>
      <CheckAppoint />
    </main>
  );
}

export default App;
