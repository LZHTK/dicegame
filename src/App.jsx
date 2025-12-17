import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import { generateRandomHand, getResult } from './utils';
import ResultCard from './ResultCard';
import styles from './App.module.css';
import zapImg from './assets/zap.svg';
import rotateImg from './assets/rotate-cw.svg';

const INITIAL_VALUE = 'rock';

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextResult = getResult(nextHand, nextOtherHand);

    setHand(nextHand);
    setOtherHand(nextOtherHand);
    if (nextResult === '승리') {
      setScore(score + 1);
    } else if (nextResult === '패배') {
      setOtherScore(otherScore + 1);
    }
    setGameHistory([...gameHistory, nextResult]);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setScore(0);
    setOtherScore(0);
    setGameHistory([]);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>가위바위보</h1>
      <div className={styles.box}>
        <h2 className={styles.subtitle}>패를 골라주세요</h2>
        <div className={styles.handButtons}>
          <HandButton
            value="scissor"
            onClick={() => handleButtonClick('scissor')}
          />
          <HandButton value="rock" onClick={() => handleButtonClick('rock')} />
          <HandButton
            value="paper"
            onClick={() => handleButtonClick('paper')}
          />
        </div>
      </div>
      <div className={styles.box}>
        <h2 className={styles.subtitle}>결과</h2>
        <div className={styles.result}>
          <ResultCard
            name="나"
            hand={hand}
            score={score}
            result={getResult(hand, otherHand)}
          />
          <img src={zapImg} alt="vs" />
          <ResultCard
            name="상대"
            hand={otherHand}
            score={otherScore}
            result={getResult(otherHand, hand)}
          />
        </div>
        <h2 className={styles.subtitle}>승부 기록</h2>
        <div className={styles.gameHistory}>{gameHistory.join(', ')}</div>
        <div className={styles.resetButton}>
          <Button onClick={handleClearClick}>
            <img src={rotateImg} alt="처음부터" />
            처음부터
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
