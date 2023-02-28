import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="py-20">{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
