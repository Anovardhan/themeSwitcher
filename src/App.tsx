import "./styles.css";
import { ThemeProvider, useTheme } from "./ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  );
}

const MainComponent = () => {
  const { theme, handleTheme } = useTheme();

  return (
    <div className="container">
      <button onClick={handleTheme}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
