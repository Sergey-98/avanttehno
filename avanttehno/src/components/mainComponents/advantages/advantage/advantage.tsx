import React from 'react';
import styles from './advantage.module.css';
import { AdvantageProps } from '../../../../types/types';

export default function Advantage(props: AdvantageProps) {
  return (
    <div className={styles.advantages__section_block}>
      <img src={props.icon} alt={props.title} className={styles.advantages__icon} />
      <h4 className={styles.advantages__section_block_title}>{props.title}</h4>
      <p className={styles.advantages__section_block_text}>{props.text}</p>
    </div>
  );
}
