import React from "react";
import Header from "./Header";
import Services from "./Services";
import Projectsoverview from "./Projectsoverview";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Services />
      <Projectsoverview />
      <Testimonials />
      <Footer />
    </>
  );
};
export default Home;
