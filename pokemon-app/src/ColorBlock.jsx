import "./ColorBlock.css";
function Colorbloclk({ color }) {
  const rgb = `rgb(${color.join(",")})`;
  const brightness = (color[0] * 299 + color[1] * 587 + color[2] * 114) / 1000;

  const textColor = brightness > 125 ? "black" : "white";
  return (
    <div className="color" style={{ "--block-color": rgb, color: textColor }}>
      <p>{rgb}</p>

      <img
        className="input-icon"
        src="../images/copy.svg"
        alt="copy"
        height="30px"
        width="30px"
      />
    </div>
  );
}
export default Colorbloclk;
