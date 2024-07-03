import { useState } from "react";
import styles from "./FormPage.module.css";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
function FormPage() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [number, setNumber] = useState(null);
  const [area, setArea] = useState(null);
  const navigate = useNavigate();
  function handleName(e) {
    setName(e.target.value);
  }
  function handleSurName(e) {
    setSurName(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
  }
  function handleArea(e) {
    setArea(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // const response = await fetch("https://example.com/submit-form", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
  }

  // Function to send Telegram notification

  return (
    <div className={styles.container}>
      <form>
        <ul className={styles.labels}>
          <li>
            <label>Ad: </label>
          </li>
          <li>
            <label>Soyad: </label>
          </li>
          <li>
            <label>Nömrə: </label>
          </li>
          <li>
            <label>Sahənin ərazisi: </label>
          </li>
        </ul>
        <ul className={styles.inputs}>
          <li>
            <input
              value={name}
              placeholder="Murad"
              onChange={handleName}
            ></input>
          </li>
          <li>
            <input
              value={surName}
              onChange={handleSurName}
              placeholder="Məmmədov"
            ></input>
          </li>
          <li>
            <input
              value={number}
              onChange={handleNumber}
              type="number"
              placeholder="0503334455"
            ></input>
          </li>
          <li>
            <input
              value={area}
              onChange={handleArea}
              type="number"
              placeholder="2.5"
            ></input>
          </li>
        </ul>
        <Button type={"primary"} onClick={handleSubmit}>
          Göndər
        </Button>
      </form>
    </div>
  );
}

export default FormPage;
