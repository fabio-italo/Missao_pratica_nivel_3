// LivroDados.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleEditora from './controle/ControleEditora';
import ControleLivro from './controle/ControleLivros';

// Instancia os controladores de livros e editoras
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function LivroDados() {
  // Define o vetor de opções para o combo de editoras
  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  // Definindo os estados para os campos do formulário
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  // Hook para navegação
  const navigate = useNavigate();

  // Manipulador para o combo de editoras
  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  // Manipulador para inclusão de livro
  const incluir = (event) => {
    event.preventDefault();

    // Cria um objeto de livro com os valores de estado
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'), // Divide os autores por linha
      codEditora,
    };

    // Inclui o livro usando o controlador
    controleLivro.incluir(livro);

    // Redireciona para a página de listagem de livros
    navigate('/');
  };

  return (
    <main>
      <h2>Inclusão de Livro</h2>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="resumo">Resumo</label>
          <textarea
            id="resumo"
            className="form-control"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="autores">Autores (um por linha)</label>
          <textarea
            id="autores"
            className="form-control"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="editora">Editora</label>
          <select
            id="editora"
            className="form-control"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Incluir</button>
      </form>
    </main>
  );
}

export default LivroDados;
