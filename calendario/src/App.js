import './App.css';

function App() {
  return (
    <div className="Calendario">
      <div className="Titulo">
        <h1>2024</h1>
        <h2>Novembro</h2>
      </div>
      <div className="Semanas">
        <span>D</span>
        <span>S</span>
        <span>T</span>
        <span>Q</span>
        <span>Q</span>
        <span>S</span>
        <span>S</span>
      </div>
      <div className="Dias">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>1</span>
        <span id="marca">2</span>
      </div>
      <div className="Dias">
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </div>
      <div className="Dias">
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <span id="marca">15</span>
        <span>16</span>
      </div>
      <div className="Dias">
        <span>17</span>
        <span>18</span>
        <span>19</span>
        <span id="marca">20</span>
        <span>21</span>
        <span>22</span>
        <span>23</span>
      </div>
      <div className="Dias">
        <span>24</span>
        <span>25</span>
        <span>26</span>
        <span>27</span>
        <span>28</span>
        <span>29</span>
        <span>30</span>
      </div>
      <div className="Feriados">
        <p>2 - Finas</p>
        <p>15 - Proclamação da República</p>
        <p>20 - Dia da Conciência Negra</p>
      </div>
    </div>
  );
}

export default App;
