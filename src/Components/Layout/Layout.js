import React from "react";
import Header from "../Header/Header";
const Layout = (props) => {
  const { home, children } = props;
  return (
    <div>
      <div>
        <Header home={home} />
      </div>
      <main className={props.class}>{children}</main>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
