import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import {
  RoutesConfigProvider,
  useRoutesConfig,
} from "./context/routesConfigContext";

const RenderRoutes = () => {
  const routes = useRoutesConfig();
  return (
    <Routes>
      {routes.map((routeGroup) =>
        routeGroup.routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))
      )}
    </Routes>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <RoutesConfigProvider>
          <RenderRoutes />
        </RoutesConfigProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
