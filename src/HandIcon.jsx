import handRock from './assets/rock.svg';
import handPaper from './assets/paper.svg';
import handScissors from './assets/scissor.svg';


const handIcons = {
    rock: handRock,
    paper: handPaper,
    scissors: handScissors,
}
function HandIcon({ value }) {

    const icon = handIcons[value];
    return <img src={icon} alt={value} />
}

export default HandIcon;