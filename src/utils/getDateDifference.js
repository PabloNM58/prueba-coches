import {
  milisecondsDay,
  milisecondsHour,
  milisecondsMinute,
  milisecondsMonth,
  milisecondsSecond,
  milisecondsYear,
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

  return getTime(milisecondsYear) >= 1
    ? `Hace ${getTime(milisecondsYear)} años`
    : getTime(milisecondsMonth) >= 1
    ? `Hace ${getTime(milisecondsMonth)} meses`
    : getTime(milisecondsDay) >= 1
    ? `Hace ${getTime(milisecondsDay)} días`
    : getTime(milisecondsHour) >= 1
    ? `Hace${getTime(milisecondsHour)} horas`
    : getTime(milisecondsMinute) >= 1
    ? `Hace ${getTime(milisecondsMinute)} minutos`
    : `Hace ${getTime(milisecondsSecond)} segundos`;
}
