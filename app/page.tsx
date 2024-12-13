"use client";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;