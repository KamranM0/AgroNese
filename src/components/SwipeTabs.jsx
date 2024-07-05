import styles from "./SwipeTabs.module.css";
function SwipeTabs({
  num,
  title,
  description,
  img,
  onNextClick,
  onPrevClick,
  fade,
}) {
  return (
    <div className={styles.swipeTab}>
      <h2>{title}</h2>
      <div className={`${styles.phoneContainer} ${fade && "hide"}`}>
        <div className={styles.left} onClick={onPrevClick}></div>
        <img src={img} alt={img}></img>
        <div className={styles.right} onClick={onNextClick}></div>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default SwipeTabs;
