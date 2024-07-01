import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Burger from "./components/Burger";
import FormPage from "./FormPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="form" element={<FormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
