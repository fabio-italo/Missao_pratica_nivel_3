export class ControleEditora {
  private editoras = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' },
  ];

  getEditoras() {
    return this.editoras;
  }

  getNomeEditora(codEditora: number) {
    const editora = this.editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : null;
  }
}
