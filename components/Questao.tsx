import React from 'react';

import QuestaoModel from '../models/questao';

import styles from '../styles/Questao.module.css';
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';

const letras = [
  {
    letra: 'A',
    cor: '#f2c866',
  },
  {
    letra: 'B',
    cor: '#f266ba',
  },
  {
    letra: 'C',
    cor: '#85d4f2',
  },
  {
    letra: 'D',
    cor: '#BCE956',
  },
];

interface QuestaoProps {
  valor: QuestaoModel;
  respostaFornecida: (indice: number) => void;
  tempoEsgotado: () => void;
}

const Questao = (props: QuestaoProps) => {
  const questao = props.valor;

  const renderizarRespostas = () => {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={i}
          valor={resposta}
          indice={i}
          letra={letras[i].letra}
          corFundoDaLetra={letras[i].cor}
          respostaFornecida={props.respostaFornecida}
        />
      );
    });
  };

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador duracao={10} tempoEsgotado={props.tempoEsgotado} />
      {renderizarRespostas()}
    </div>
  );
};

export default Questao;
