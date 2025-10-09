import { useTheme } from "./ThemeContext";
import "./ThemeToggler.css";
export default function ThemeToggler() {
  const { toggleTheme } = useTheme();
  return (
    // <div className="theme-toggler">
    //   <button onClick={toggleTheme} className="theme-toggle-button">
    //     Switch to {theme === "light" ? "dark" : "light"} theme
    //   </button>
    <section className="container">
      <label id="switch" className="switch">
        <input type="checkbox" onChange={toggleTheme} id="slider" />
        <span className="slider round"></span>
      </label>
    </section>
    // </div>
  );
}
