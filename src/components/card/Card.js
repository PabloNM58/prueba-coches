import "./card.css";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import CarFuelIcon from "./CarFuelIcon";
import getDateDifference from "../../utils/getDateDifference";
import CardFooter from "./CardFooter";
import formatNumbersDot from "../../utils/formatNumbersDot";

export default function Card({
  carInfo,
  changeFavCondition,
  setModalIsOpen,
  setModalInfo,
}) {
  const openModal = (carInfo) => {
    setModalIsOpen(true);
    setModalInfo(carInfo);
  };

  return (
    <>
      <div className="card" onClick={() => openModal(carInfo)}>
        <section className="image-container">
          <p className="time-overlay-text">
            {getDateDifference(
              carInfo.lastedited.year,
              carInfo.lastedited.month,
              carInfo.lastedited.day,
              carInfo.lastedited.hour,
              carInfo.lastedited.minute,
              carInfo.lastedited.second
            )}
          </p>
          <p className="num-photos-overlay-text">
            {carInfo.numberofphotos} <MdInsertPhoto />
          </p>
          <img
            className="image"
            src={carInfo.defaultphoto}
            alt={carInfo.make}
          />
        </section>
        <section className="info-car-container">
          <div className="price-container">
            <p className="price-typography">
              {formatNumbersDot(carInfo.price)} €
            </p>
            <div
              className="fab-icon-container"
              onClick={(e) => changeFavCondition(e, carInfo.id)}
            >
              {carInfo.favorite ? (
                <FaHeart style={{ color: "#b71c1c", fontSize: "20px" }} />
              ) : (
                <FaRegHeart style={{ color: "#bdbdbd", fontSize: "20px" }} />
              )}
            </div>
          </div>
          <p className="car-model-typography">
            {carInfo.make} {carInfo.model}
          </p>
          <div className="car-version-container">
            <p className="car-version-typography" title={carInfo.version}>
              {carInfo.version}
            </p>
            <div className="info-fuel-container">
              <CarFuelIcon fuel={carInfo.fuel} />
              <p className="car-fuel-typography">{carInfo.fuel}</p>
            </div>
          </div>
          <CardFooter carInfo={carInfo} />
        </section>
      </div>
    </>
  );
}
