import { useTheme } from "./ThemeContext";
export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="theme-toggler">
      <button onClick={toggleTheme} className="theme-toggle-button">
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
      <section className="container">
        <label id="switch" class="switch">
          <input type="checkbox" onchange="toggleTheme()" id="slider" />
          <span class="slider round"></span>
        </label>
      </section>
    </div>
  );
}
