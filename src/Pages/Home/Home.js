import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";

const Home = () => {
  return (
    <Layout home>
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-16 my-5 h-auto">
          <MenuSection home />
          <HeroSection />
        </div>
      </div>
      <div className="flex justify-between"></div>
    </Layout>
  );
};

export default Home;
