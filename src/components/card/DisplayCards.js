import "./card.css";
import Card from "./Card";
import { Fragment } from "react";

export default function DisplayCards({
  cars,
  setCars,
  setModalIsOpen,
  setModalInfo,
}) {
  const changeFavCondition = (e, carId) => {
    e.stopPropagation();
    setCars((prevState) =>
      prevState.map((car) => ({
        ...car,
        favorite: car.id === carId ? !car.favorite : car.favorite,
      }))
    );
  };

  return (
    <Fragment>
      <p className="cars-intro">Coches que te pueden interesar</p>
      <div className="flex-container">
        {cars.map((car) => (
          <Card
            carInfo={car}
            key={car.id}
            changeFavCondition={changeFavCondition}
            setModalIsOpen={setModalIsOpen}
            setModalInfo={setModalInfo}
          />
        ))}
      </div>
    </Fragment>
  );
}
