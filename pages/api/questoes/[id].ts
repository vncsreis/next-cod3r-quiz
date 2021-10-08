import questoes from '../bancoDeQuestoes';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const idSelecionado = +req.query.id;

  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
    res.status(200).json(questaoSelecionada.paraObjeto());
  } else {
    res.status(204).send({});
  }
};

export default handler;
