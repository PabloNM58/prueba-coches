export default function formatNumbersDot(number) {
  return new Intl.NumberFormat("es-CL").format(number);
}
