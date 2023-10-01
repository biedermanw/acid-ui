import { useTheme } from "../../context/themeContext";
import { NavbarContainer, Title, Button } from "./Navbar.styles"; // Import as named exports

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavbarContainer>
      <Title>My Website</Title>
      <div>
        <Button onClick={toggleTheme}>
          Switch to {theme === "blue" ? "Red" : "Blue"} Theme
        </Button>
        <Button>Login</Button>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
