import { LuFuel } from "react-icons/lu";
import { LuPlug } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";

export default function CarFuelIcon({ fuel }) {
  const iconStyle = {
    color: "#bdbdbd",
    fontSize: "20px",
    marginRight: "5px",
    marginBottom: "3px",
  };
  return fuel === "Híbrido" ? (
    <MdElectricBolt style={iconStyle} />
  ) : fuel === "Eléctrico" ? (
    <LuPlug style={iconStyle} />
  ) : (
    <LuFuel style={iconStyle} />
  );
}
