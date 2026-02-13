import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Services from "./Services";
import Projectsoverview from "./Projectsoverview";
import Testimonials from "./Testimonials";

import Footer from "./Footer";
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
