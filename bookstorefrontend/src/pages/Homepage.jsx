import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import About from "../components/About";
import Collections from "../components/Collections";
import Testimonial from "../components/Testimonial";
import Upcoming from "../components/Upcoming";
import Subscribe from "../components/Subscribe";

function Homepage() {
  return (
    <>
      <Header bgColor="bg-[#fcebe6]" />
      <Features />
      <About />
      <Collections />
      <Testimonial />
      <Upcoming />
      <Subscribe />
    </>
  );
}

export default Homepage;
