import "./card.css";
import { LuFuel } from "react-icons/lu";
import { LuPlug } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";
import Icon from "../icon/Icon";

export default function CarFuelIcon({ fuel }) {
  return (
    <span className="car-fuel-icon">
      {fuel === "Híbrido" ? (
        <Icon name={MdElectricBolt} fontSize="20px" color="#bdbdbd" />
      ) : fuel === "Eléctrico" ? (
        <Icon name={LuPlug} fontSize="20px" color="#bdbdbd" />
      ) : (
        <Icon name={LuFuel} fontSize="20px" color="#bdbdbd" />
      )}
    </span>
  );
}
