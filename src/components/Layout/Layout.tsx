import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer
        links={[
          { text: "Home", url: "/" },
          { text: "About", url: "/about" },
          { text: "Contact", url: "/contact" },
        ]}
      />
    </div>
  );
};

export default Layout;
