import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Login'>
        <h1>Login</h1>
        <div className='Info'>
          <input type='email' placeholder='Digite seu email'></input>
          <input type='password' placeholder='Digite sua senha'></input>
        </div>
        <div className='Lembre'>
          <label><input type='checkbox'></input>Lembre-se</label>
          <a href='#'>Esqueceu a senha?</a>
        </div>
        <button>Cadastre-se</button>
        <div className='Conta'>
          <p>Você já tem uma conta?</p>
          <a href='#'>Registre-se</a>
        </div>
      </div>
    </div>
  );
}

export default App;
