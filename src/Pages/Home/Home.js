import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";

const Home = () => {
  return (
    <Layout header>
      <HeroSection />
      <div className="flex justify-between">a</div>
    </Layout>
  );
};

export default Home;
