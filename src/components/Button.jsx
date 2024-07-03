import styles from "./Button.module.css";
function Button({ onClick, type, style, children, isDisabled, classes }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`${classes} ${styles[type]} btn`}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
