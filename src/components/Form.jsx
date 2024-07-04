import { useState } from "react";
import Button from "./../components/Button";
import styles from "./Form.module.css";
import { sendTelegramNotification } from "../services/FormService";
import { useNavigate } from "react-router-dom";
function Form() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [number, setNumber] = useState(null);
  const [area, setArea] = useState(null);
  const [areaUnit, setAreaUnit] = useState("ha");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  function reset() {
    setName("");
    setSurName("");
    setNumber("");
    setArea("");
    setAreaUnit("ha");
    setComment("");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      name === "" ||
      surName === "" ||
      number === "" ||
      area === "" ||
      areaUnit === ""
    )
      return;
    await sendTelegramNotification(
      name,
      surName,
      area,
      areaUnit,
      number,
      comment
    );
    alert("Form submitted successfully!");
    reset();
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <h1>Müraciət et</h1>
      <div className={styles.form}>
        <div className={styles.contact}>
          <h2>Bizimlə əlaqəyə keçin.</h2>
          <p>
            Telefon nömrəmiz vasitəsilə müştəri xidmətləri bölməmizlə 7/24
            əlaqədə olun.
          </p>
          <div className={styles.number}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="green"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
            </svg>
            <h2>+994 50 111 11 11</h2>
          </div>
        </div>
        <form className={styles.formInputs}>
          <input
            required
            type="text"
            placeholder="Adınız"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            required
            type="text"
            placeholder="Soyadınız"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
          ></input>
          <input
            required
            type="number"
            placeholder="Mobil nömrə"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <div className={styles.withSelect}>
            <input
              required
              type="number"
              placeholder="Ərazinin sahəsi"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            ></input>
            <select
              value={areaUnit}
              onChange={(e) => setAreaUnit(e.target.value)}
            >
              <option value={"ha"}>ha</option>
              <option value={"a"}>a</option>
              <option value={"m2"}>m2</option>
            </select>
          </div>
          <textarea
            className={styles.fullWidth}
            placeholder="Əlavə rəy"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
          ></textarea>
          <Button
            type={"primary"}
            classes={`${styles.fullWidth} ${styles.button}`}
            onClick={handleSubmit}
          >
            Göndər
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;
