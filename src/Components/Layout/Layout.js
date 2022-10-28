import React from "react";
import Header from "../Header/Header";

const Layout = ({ home, children }) => {
  return (
    <div>
      <div>
        <Header home={home} />
      </div>
      <main>{children}</main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};

export default Layout;
