import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  useMemo,
} from "react";

export type RouteConfig = {
  path: string;
  component: React.ComponentType;
  title: string;
  showInNavbar: boolean;
  showInFooter: boolean;
};

export type RoutesConfig = Array<{ routes: RouteConfig[] }>;

const staticRoutesConfig: RoutesConfig = [
  {
    routes: [],
  },
];

export const RoutesConfigContext = createContext<RoutesConfig | undefined>(
  undefined
);

type RouteModule = {
  routes: RouteConfig[];
};

export const loadRoutes = async (): Promise<RoutesConfig> => {
  const routeModules = import.meta.glob("../pages/**/*.route.tsx");

  const dynamicRoutesPromises = Object.values(routeModules).map(
    async (moduleImport) => {
      const { default: module } = (await moduleImport()) as {
        default: RouteModule;
      };
      return module.routes ? { routes: module.routes } : undefined;
    }
  );

  const resolvedDynamicRoutes = await Promise.all(dynamicRoutesPromises);
  return resolvedDynamicRoutes.filter(Boolean) as RoutesConfig;
};

export const RoutesConfigProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [routes, setRoutes] = useState<RoutesConfig>(staticRoutesConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRoutesData = async () => {
      try {
        const loadedRoutes = await loadRoutes();
        setRoutes((prevRoutes) => {
          // Using a Set to filter out already present routes
          const newPaths = new Set(prevRoutes.flatMap(group => group.routes.map(route => route.path)));
          const filteredRoutes = loadedRoutes.filter(routeGroup => 
            !routeGroup.routes.some(route => newPaths.has(route.path))
          );
          return [...prevRoutes, ...filteredRoutes];
        });
      } catch (error) {
        console.error("Error loading routes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRoutesData();
  }, []);

  const providerValue = useMemo(() => routes, [routes]);

  if (loading) {
    return <div>Loading...</div>; // Consider a better loading UI
  }

  return (
    <RoutesConfigContext.Provider value={providerValue}>
      {children}
    </RoutesConfigContext.Provider>
  );
};

export const useRoutesConfig = () => {
  const context = useContext(RoutesConfigContext);
  if (context === undefined) {
    throw new Error(
      "useRoutesConfig must be used within a RoutesConfigProvider"
    );
  }
  return context;
};
