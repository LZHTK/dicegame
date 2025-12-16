import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { generateRandomHand, getResult } from './util';

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
            setScore((prev) => prev + 1);
        } else if (nextResult === '패배') {
            setOtherScore((prev) => prev + 1);
        }

        setGameHistory((prev) => [...prev,nextResult]);
    };

    const handleClearClick = (nextHand) => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setScore(0);
        setOtherScore(0);
        setGameHistory([]);
    }

    return (
        <div>
            <h1>가위바위보</h1>
            <div>
                <h2>패를 골라 주세요</h2>
                <HandButton value="rock" onClick={() => handleButtonClick('rock')}/>
                <HandButton value="paper" onClick={() => handleButtonClick('paper')}/>
                <HandButton value="scissor" onClick={() => handleButtonClick('scissor')}/>
            </div>

            <div>
                <h3>나</h3>
                <HandIcon value={hand} /> 점수 : {score}
                <h3>상대</h3>
                <HandIcon value={otherHand} /> 점수 : {otherScore}
            </div>
            <h2>승부 기록</h2>
            <div>{gameHistory.join(', ')}</div>
            <div>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
        </div>
    )
}

export default App;