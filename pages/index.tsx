import type { NextPage } from 'next';
import Questao from '../components/Questao';
import QuestaoModel from '../models/questao';
import RespostaModel from '../models/resposta';

const Home: NextPage = () => {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor?', [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Vermelha'),
    RespostaModel.errada('Azul'),
    RespostaModel.certa('Preta'),
  ]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Questao valor={questaoTeste} />
    </div>
  );
};

export default Home;
