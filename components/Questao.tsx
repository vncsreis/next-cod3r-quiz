import React from 'react';

import QuestaoModel from '../models/questao';

import styles from '../styles/Questao.module.css';
import Enunciado from './Enunciado';
import Resposta from './Resposta';

interface QuestaoProps {
  valor: QuestaoModel;
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
          letra="A"
          corFundoDaLetra="#f2c866"
        />
      );
    });
  };

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      {renderizarRespostas()}
    </div>
  );
};

export default Questao;
