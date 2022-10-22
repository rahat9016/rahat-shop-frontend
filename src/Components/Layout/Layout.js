import React from "react";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <div>
      {props.header ? (
        <div>
          <Header />
        </div>
      ) : null}
      <main className="container mx-auto">{props.children}</main>
    </div>
  );
};

export default Layout;
