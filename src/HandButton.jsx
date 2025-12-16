import HandIcon from "./HandIcon";

const handButtonStyle = {
    display: 'inline-flex',
    width: '120px',
    height: '120px',
    padding: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '32px',
    background: 'rgba(255, 255, 255, 0.03)',
    boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
};

function HandButton({ value, onClick }) {

    return (
        <button  style={handButtonStyle} onClick={onClick}>
            <HandIcon value={value} />
        </button>
    );
}

export default HandButton;

