import { useState, useEffect } from "react";
// const ThemeContext = createContext();
import { ThemeContext } from "./ThemeContext";
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // проверяем сохранённую тему в localStorage
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
// export function useTheme() {
//   return useContext(ThemeContext);
// }
