import type { NextApiRequest, NextApiResponse } from 'next';
import embaralhar from '../../../functions/arrays';

import questoes from '../bancoDeQuestoes';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const ids = questoes.map((questao) => questao.id);
  res.status(200).json(embaralhar(ids));
};

export default handler;
