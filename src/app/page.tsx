import React from "react";
import HeroSection from "@/components/HeroSection";
// import SkillsSection from "@/components/SkillsSection"; 
// import ProjectsSection from "@/components/ProjectsSection";

function page () {
  return (
     <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mt-24 mx-auto px-12 py-4">
    <HeroSection />
    {/* <SkillsSection />
    <ProjectsSection /> */}
    </div>
  </main>
  )
}
export default page;

