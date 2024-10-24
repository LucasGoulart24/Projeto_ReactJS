import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='Menu'>
        <h3>M.P Studio</h3>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Sobre</a></li>
          <li><a href='#'>Serviço</a></li>
          <li><a href='#'>Contato</a></li>
        </ul>
      </nav>
      <div className='Principal'>
        <h1>M.P Studio</h1>
        <p>A Music Player Studio é um site para você baixar seus gêneros musicais favoritos</p>
      </div>
      <div className='Pesquisa'>
        <input type='texto' placeholder='Digite o gênero musical'></input>
        <button>Pesquisar</button>
      </div>
    </div>
  );
}

export default App;
