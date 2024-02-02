export default function Icon({ name, fontSize, color, onClick }) {
  const CustomIcon = name;
  return (
    <CustomIcon
      fontSize={fontSize}
      color={color}
      onClick={onClick ? onClick : null}
    />
  );
}
