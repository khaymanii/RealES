
import Blog from "@/component/Blog";
import Bookcall from "@/component/Bookcall";
import HeroSection from "@/component/Hero";
import Product from "@/component/Product";
import Stats from "@/component/Stats";
import Testimonial from "@/component/Testimonial";
import Workflow from "@/component/workFlow";
import React from "react";

function page() {
  return <div>
          <HeroSection />
          <Testimonial />
          <Workflow />
          <Product />
          <Stats />
          <Blog />
          <Bookcall />
  </div>;
}

export default page;
