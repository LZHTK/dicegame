import HandIcon from './HandIcon';
import styles from './ResultCard.module.css';

function ResultCard({ name, hand, score, result }) {
  const classNames = [
    styles.resultCard,
    result === '승리' ? styles.winner : '',
    result === '패배' ? styles.loser : '',
  ].join(' ');

  return (
    <div className={classNames}>
      <div className={styles.chip}>승리</div>
      <div className={styles.name}>{name}</div>
      <HandIcon value={hand} />
      <div className={styles.score}>{score}</div>
    </div>
  );
}

export default ResultCard;
