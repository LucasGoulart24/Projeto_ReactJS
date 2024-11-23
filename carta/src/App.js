import './App.css';
import Endereco from './Components/Endereco'; // Componente
import Imagem from './Img/Cidade_do_rio.jpg';

// Botão
function Button() {
  return (
    <button>Marcar viagem</button>
  );
}

function App() {
  return (
    <div className="Carta">
      <img src={Imagem}></img>
      <Endereco
          nome="Rio de Janeiro"
          tempo="6h e 21min"
          km="503,5"
          descricao="O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo."
      />
      <Button></Button>
    </div>
  );
}

export default App;
