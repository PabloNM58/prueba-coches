import "./card.css";
import formatNumbersDot from "../../utils/formatNumbersDot";

export default function CardFooter({ carInfo }) {
  return (
    <section className="card-footer" title={carInfo.location.toUpperCase()}>
      <p className="car-location">{carInfo.location.toUpperCase()}</p>
      <p className="car-year">{carInfo.year}</p>
      <p className="car-km">{formatNumbersDot(carInfo.kilometers)} KM</p>
    </section>
  );
}
