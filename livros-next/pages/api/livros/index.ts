import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../classes/controle/ControleLivro';

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const livroData = req.body;
      controleLivro.incluir(livroData);
      res.status(200).json({ message: 'Livro incluído com sucesso' });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};
