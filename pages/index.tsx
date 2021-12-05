import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Questionario from '../components/Questionario';
import QuestaoModel from '../models/questao';
import RespostaModel from '../models/resposta';

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
]);

const BASE_URL = 'http://localhost:3000/api';

const Home: NextPage = () => {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState(questaoMock);

  const carregarIdsDasQuestoes = async () => {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const ids = await resp.json();
    setIdsDasQuestoes(ids);
  };

  const carregarQuestao = async (idQuestao: number) => {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const questaoDados = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(questaoDados);
    setQuestao(novaQuestao);
  };

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  const questaoRespondida = (questao: QuestaoModel) => {};

  const irPraProximoPasso = () => {};

  return (
    <Questionario
      questao={questao}
      ultima={false}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  );
};

export default Home;
