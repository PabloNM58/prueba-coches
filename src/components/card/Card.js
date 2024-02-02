import "./card.css";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import CarFuelIcon from "./CarFuelIcon";
import getDateDifference from "../../utils/getDateDifference";
import CardFooter from "./CardFooter";
import formatNumbersDot from "../../utils/formatNumbersDot";
import Icon from "../icon/Icon";

export default function Card({ carInfo, changeFavCondition, onClickCard }) {
  return (
    <>
      <div
        data-testid="card-item"
        className="card"
        onClick={() => onClickCard(carInfo)}
      >
        <section className="card__image__container">
          <img
            className="card__image__container--image"
            src={carInfo.defaultphoto}
            alt={carInfo.make}
          />
          <p className="card__image__container--time--overlay--text">
            {getDateDifference(
              carInfo.lastedited.year,
              carInfo.lastedited.month,
              carInfo.lastedited.day,
              carInfo.lastedited.hour,
              carInfo.lastedited.minute,
              carInfo.lastedited.second
            )}
          </p>
          <p className="card__image__container--num--photos--overlay--text">
            {carInfo.numberofphotos} <MdInsertPhoto />
          </p>
        </section>
        <section className="car__info__car__container">
          <div className="car__info__car__container--price--container">
            <p className="car__info__car__container--price--typography">
              {formatNumbersDot(carInfo.price)} €
            </p>
            <div
              className="car__info__car__container--fab--icon"
              onClick={(e) => changeFavCondition(e, carInfo.id)}
            >
              {carInfo.favorite ? (
                <Icon name={FaHeart} fontSize="20px" color="#b71c1c" />
              ) : (
                <Icon name={FaRegHeart} fontSize="20px" color="#bdbdbd" />
              )}
            </div>
          </div>
          <p className="car__info__car__container--car--model">
            {carInfo.make} {carInfo.model}
          </p>
          <div className="car__info__car__container--car--version--container">
            <p
              className="car__info__car__container--car--version"
              title={carInfo.version}
            >
              {carInfo.version}
            </p>
            <div className="car__info__car__container--fuel--container">
              <CarFuelIcon fuel={carInfo.fuel} />
              <p className="car__info__car__container--car--fuel">
                {carInfo.fuel}
              </p>
            </div>
          </div>
          <CardFooter carInfo={carInfo} />
        </section>
      </div>
    </>
  );
}
