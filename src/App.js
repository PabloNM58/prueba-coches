import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Slogan from "./components/slogan/Slogan";
import CardModal from "./components/modal/Modal";
import DisplayCards from "./components/card/DisplayCards";
import { API_URL } from "./constants";

function App() {
  const [cars, setCars] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const getCarsFromApi = () => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("error fetching data");
        return res.json();
      })
      .then((data) => setCars(data))
      .catch((err) => err);
  };
  useEffect(() => getCarsFromApi(), []);

  return (
    <Fragment>
      <Navbar />
      <Slogan />
      <main className="app-container">
        {cars.length !== 0 ? (
          <DisplayCards
            cars={cars}
            setCars={setCars}
            setModalIsOpen={setModalIsOpen}
            setModalInfo={setModalInfo}
          />
        ) : (
          <h1>Cargando datos...</h1>
        )}
      </main>
      <CardModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        modalInfo={modalInfo}
      />
    </Fragment>
  );
}

export default App;
