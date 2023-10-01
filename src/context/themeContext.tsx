import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { blueTheme, redTheme } from "../styles/themes";

export type Theme = "blue" | "red";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("blue");

  // Set the CSS variables for the theme
  useEffect(() => {
    const themeColors = currentTheme === "blue" ? blueTheme : redTheme;
    for (const colorName in themeColors) {
      document.documentElement.style.setProperty(
        `--${colorName}-color`,
        themeColors[colorName as keyof typeof themeColors]
      );
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "blue" ? "red" : "blue"));
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
