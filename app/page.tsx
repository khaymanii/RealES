import Category from "@/component/Category";
import HeroSection from "@/component/Hero";
import HomeCard from "@/component/HomeCard";
import Workflow from "@/component/Workflow";
import React from "react";

function page() {
  return <div>
    <HeroSection />
    <HomeCard />
    <Category />
    <Workflow />
  </div>;
}

export default page;
