import "./BackgroundImage.css";
import { DesignContext } from "./contexts";
import { useContext } from "react";

function DesignPicker() {
  // context is not really needed here, but it's an example of how to use it
  const [, setDesign] = useContext(DesignContext);

  return (
    <div className="buttons">
      <button
        className="color-button rose"
        onClick={() => {
          setDesign("rose");
        }}
      ></button>
      <button
        className="color-button blue"
        onClick={() => {
          setDesign("blue");
        }}
      ></button>
      <button
        className="color-button"
        id="green"
        onClick={() => {
          setDesign("green");
        }}
      ></button>
      <button
        className="color-button beige"
        onClick={() => {
          setDesign("beige");
        }}
      ></button>
      <button
        className="color-button brown"
        onClick={() => {
          setDesign("brown");
        }}
      ></button>
      <button
        className="color-button yellow"
        onClick={() => {
          setDesign("yellow");
        }}
      ></button>
    </div>
  );
}
export default DesignPicker;
