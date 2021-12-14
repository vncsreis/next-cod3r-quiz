import type { NextPage } from 'next';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState(questaoMock);
  const [respostasCertas, setRespostasCertas] = useState(0);

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

  const questaoRespondida = (questaoRespondida: QuestaoModel) => {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  };

  const idProximaQuestao = () => {
    if (questao) {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
      return idsDasQuestoes[proximoIndice];
    }
  };

  const irPraProximaQuestao = (proximoId: number) => {
    carregarQuestao(proximoId);
  };

  const finalizar = () => {
    router.push({
      pathname: '/resultado',
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas,
      },
    });
  };

  const irPraProximoPasso = () => {
    const proximoId = idProximaQuestao();
    proximoId ? irPraProximaQuestao(proximoId) : finalizar();
  };

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaQuestao() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  ) : null;
};

export default Home;
