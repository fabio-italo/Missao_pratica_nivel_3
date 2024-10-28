import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Loja Next</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">Página Inicial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/LivroLista">Lista de Livros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/LivroDados">Cadastrar Livro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
