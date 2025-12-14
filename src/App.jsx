import Button from './Button';
import HandButton from './HandButton';

function App() {
    const handleButtonClick = (value) => console.log(value);
    const handleClearClick = () => console.log('처음부터');

    return (
        <div>
            <h1>가위바위보</h1>
            <div>
                <h2>패를 골라 주세요</h2>
                <HandButton value="rock" onClick={() => handleButtonClick('rock')}/>
                <HandButton value="paper" onClick={() => handleButtonClick('paper')}/>
                <HandButton value="scissors" onClick={() => handleButtonClick('scissor')}/>
            </div>
            <div>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
        </div>
    )
}

export default App;