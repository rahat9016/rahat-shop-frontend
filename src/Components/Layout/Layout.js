import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Layout = ({ home, children }) => {
  return (
    <div>
      <div>
        <Header home={home} />
      </div>
      <main>{children}</main>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
