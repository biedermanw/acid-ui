import { useRoutesConfig } from "../../context/routesConfigContext";
import { Link } from "react-router-dom";
import { FooterContainer } from "./Footer.styles";

const Footer: React.FC = () => {
  const routesConfig = useRoutesConfig();
  const allRoutes = routesConfig.flatMap((config) => config.routes);

  return (
    <FooterContainer>
      {allRoutes
        .filter((route) => route.showInFooter)
        .map((route) => (
          <Link key={route.path} to={route.path}>
            {route.title}
          </Link>
        ))}
      &copy; {new Date().getFullYear()} All rights reserved. | Developed by{" "}
      <a
        href="https://your-website.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Your Name
      </a>
    </FooterContainer>
  );
};

export default Footer;
