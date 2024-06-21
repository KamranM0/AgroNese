import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/logo.png" alt="logo"></img>
      <p>AgroNese</p>
    </div>
  );
}

export default Logo;
