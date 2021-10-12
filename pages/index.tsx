import type { NextPage } from 'next';
import { useState } from 'react';
import Questao from '../components/Questao';
import QuestaoModel from '../models/questao';
import RespostaModel from '../models/resposta';

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
]);

const Home: NextPage = () => {
  const [questao, setQuestao] = useState(questaoMock);

  const respostaFornecida = (indice: number) => {
    console.log(indice);
    setQuestao(questao.responderCom(indice));
  };

  const tempoEsgotado = () => {
    if (!questao.respondida) {
      setQuestao(questao.responderCom(-1));
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Questao
        valor={questao}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={() => tempoEsgotado()}
      />
    </div>
  );
};

export default Home;
