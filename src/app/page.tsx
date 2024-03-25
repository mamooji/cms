"use client";
import React from "react";

import MasjidForm from "@/components/MasjidForm";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col mx-8">
      <Hero />
      <Quote />
      <MasjidForm />

      <div className="flex flex-col justify-center h-full">
        {/* <div className="pb-2">
          <iframe
            className="h-[410px] w-full dark:bg-black "
            src="https://www-cambridgemuslimsociety-org.filesusr.com/html/546bbe_1e7d0122def4e24106a73884251c2906.html"
          ></iframe>
        </div>
        <div className="flex px-7 justify-center">
          <iframe
            className="h-[1000px] w-[375px] dark:bg-black "
            src="https://www.livemasjid.com/cambridge"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
