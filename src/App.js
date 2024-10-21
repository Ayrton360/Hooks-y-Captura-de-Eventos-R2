import './App.css';
import Galeria from './components/Galeria';
import Formulario from './components/Formulario';
import Juego from './components/Juego';
import Botones from './components/Botones';
import Notas from './components/Notas';
function App() {
  return (
    <div className="App">
      <Galeria/>
      <Formulario/>
      <Juego/>
      <Botones/>
      <Notas/>
    </div>
  );
}

export default App;
