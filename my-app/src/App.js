import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <nav className='menu'>
        <h3>Logo</h3>
        <ul>
          <li><a>Home</a></li>
          <li><a>Sobre</a></li>
          <li><a>Serviço</a></li>
          <li><a>Contato</a></li>
        </ul>
      </nav>
      <div className='principal'>
        <div className='card'>
          <h1>Hello World</h1>
          <p>Esse é meu primeiro site em ReactJS, se você não sabe o que é ReactJS, clique no botão para saber mais.</p>
          <button><a href='https://react.dev/'>Saiba Mais</a></button>
        </div>
        <div className='logo'>
          <img src={logo} alt='logo'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
