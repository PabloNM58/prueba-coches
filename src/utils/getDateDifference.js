import {
  MILISECONDS_IN_DAY,
  MILISECONDS_IN_HOUR,
  MILISECONDS_IN_MINUTE,
  MILISECONDS_IN_SECOND,
  MILISECONDS_IN_YEAR,
  MILISECONDS_IN_MONTH,
} from "../constants";

export default function getDateDifference(
  year,
  month,
  day,
  hour,
  minute,
  second
) {
  const difference =
    new Date() - new Date(year, month - 1, day, hour, minute, second);

  const getTime = (miliseconds) => Math.floor(difference / miliseconds);

  return getTime(MILISECONDS_IN_YEAR) >= 1
    ? `Hace ${getTime(MILISECONDS_IN_YEAR)} años`
    : getTime(MILISECONDS_IN_MONTH) >= 1
    ? `Hace ${getTime(MILISECONDS_IN_MONTH)} meses`
    : getTime(MILISECONDS_IN_DAY) >= 1
    ? `Hace ${getTime(MILISECONDS_IN_DAY)} días`
    : getTime(MILISECONDS_IN_HOUR) >= 1
    ? `Hace${getTime(MILISECONDS_IN_HOUR)} horas`
    : getTime(MILISECONDS_IN_MINUTE) >= 1
    ? `Hace ${getTime(MILISECONDS_IN_MINUTE)} minutos`
    : `Hace ${getTime(MILISECONDS_IN_SECOND)} segundos`;
}
