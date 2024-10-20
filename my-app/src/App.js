import './App.css';

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
          <p>Esse é meu primeiro site em ReactJS</p>
        </div>
        <p>&copy;2024 - Lucas Biasoli Goulart</p>
      </div>
    </div>
  );
}

export default App;
