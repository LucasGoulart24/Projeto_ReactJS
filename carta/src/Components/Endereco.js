function Endereco({ nome, descricao, tempo, km }) {
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <h3>Tempo de viagem: {tempo}</h3>
            <h3>Km: {km}</h3>
            <p>Descrição: {descricao}</p>
        </div>
    );
}

export default Endereco;