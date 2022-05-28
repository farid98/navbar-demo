import Footer from "./footer";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
