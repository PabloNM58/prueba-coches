import "./card.css";
import formatNumbersDot from "../../utils/formatNumbersDot";

export default function CardFooter({ carInfo }) {
  return (
    <section className="card-footer" title={carInfo.location.toUpperCase()}>
      <p className="card-footer__car__location">
        {carInfo.location.toUpperCase()}
      </p>
      <p className="card-footer__car__year">{carInfo.year}</p>
      <p className="card-footer__car__km">
        {formatNumbersDot(carInfo.kilometers)} KM
      </p>
    </section>
  );
}
