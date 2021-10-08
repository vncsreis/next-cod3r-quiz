import React from 'react';

import QuestaoModel from '../models/questao';

import styles from '../styles/Qustao.module.css';

interface QuestaoProps {
  valor: QuestaoModel;
}

const Questao = (props: QuestaoProps) => {
  const questao = props.valor;
  return (
    <div className={styles.questao}>
      <h1>Questão</h1>
    </div>
  );
};

export default Questao;
