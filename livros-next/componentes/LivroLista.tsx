import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { Menu } from './Menu';
import { LinhaLivro } from './LinhaLivro';
import { Livro } from '../classes/modelo/Livro';

const baseURL = "http://localhost:3000/api/livros";

// Função para obter os livros
const obter = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

// Função para excluir um livro pelo código
const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
  return response.ok;
};

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  // Carrega os livros quando o componente é montado
  useEffect(() => {
    if (!carregado) {
      obter().then((data) => {
        setLivros(data);
        setCarregado(true);
      });
    }
  }, [carregado]);

  // Função para excluir e forçar o redesenho
  const excluir = (codigo: number) => {
    excluirLivro(codigo).then(() => setCarregado(false));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next - Lista de Livros</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
