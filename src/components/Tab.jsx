import styles from "./Tab.module.css";
function Tab({
  children,
  title,
  tabNum,
  openTab,
  setOpenTab,
  setImageURL,
  imageURL,
}) {
  function handleClick() {
    if (openTab === tabNum) {
      setOpenTab(null);
      setImageURL("/home.png");
    } else {
      setOpenTab(tabNum);
      setImageURL(imageURL);
    }
  }
  return (
    <div
      onClick={handleClick}
      className={`${styles.tab} ${openTab === tabNum && styles.open}`}
    >
      <h2>{title}</h2>
      {openTab === tabNum && <p>{children}</p>}
    </div>
  );
}

export default Tab;
