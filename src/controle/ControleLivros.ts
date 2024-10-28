import { Livro } from '../modelo/Livro';

let livros: Array<Livro> = [
  { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo do Livro A', autores: ['Autor 1', 'Autor 2'] },
  { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo do Livro B', autores: ['Autor 3'] },
  { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo do Livro C', autores: ['Autor 4', 'Autor 5'] },
];

export default class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = livros.length > 0 ? Math.max(...livros.map((l) => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = livros.findIndex((l) => l.codigo === codigo);
    if (indice >= 0) {
      livros.splice(indice, 1);
    }
  }
}
