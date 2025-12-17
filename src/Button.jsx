import styles from './Button.module.css';

function Button({ className = '', children, onClick }) {
  const classNames = `${styles.button} ${className}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
