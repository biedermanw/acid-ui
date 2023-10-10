import { useTheme } from "../../context/themeContext";
import { useRoutesConfig } from "../../context/routesConfigContext";
import { NavbarContainer, Title, Button } from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const routesConfig = useRoutesConfig();

  const allRoutes = routesConfig.flatMap((config) => config.routes);

  return (
    <NavbarContainer>
      <Title>My Website</Title>
      <nav>
        {allRoutes
          .filter((route) => route.showInNavbar)
          .map((route) => (
            <Link key={route.path} to={route.path}>
              {route.title}
            </Link>
          ))}
      </nav>
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
