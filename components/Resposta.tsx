import React from 'react';
import RespostaModel from '../models/resposta';
import styles from '../styles/Resposta.module.css';

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corFundoDaLetra: string;
}

const Resposta = (props: RespostaProps) => {
  const resposta = props.valor;
  return (
    <div className={styles.resposta}>
      <div className={styles.conteudoResposta}>
        <div className={styles.frente}>
          <div
            className={styles.letra}
            style={{ backgroundColor: props.corFundoDaLetra }}
          >
            {props.letra}
          </div>
        </div>
        <div className={styles.valor}>{resposta.valor}</div>
        <div className={styles.verso}></div>
      </div>
    </div>
  );
};

export default Resposta;
