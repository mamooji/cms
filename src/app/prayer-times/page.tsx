import React from "react";

const PrayerTimes = () => {
  return (
    <div className="flex flex-col mx-8">
      <div className="flex flex-col justify-center h-full">
        <h1 className="scroll-m-20 py-4 pt-8 text-5xl  font-extrabold tracking-tight lg:text-5xl">
          Prayer <span className="text-primary">Times</span>
        </h1>
        <div className="flex  justify-center">
          <iframe
            className="h-[430px] w-[400px] dark:bg-black "
            src="https://www-cambridgemuslimsociety-org.filesusr.com/html/546bbe_1e7d0122def4e24106a73884251c2906.html"
          ></iframe>
        </div>
        <div className="flex  justify-center">
          <iframe
            className="h-[1000px] w-[375px] dark:bg-black "
            src="https://www.livemasjid.com/cambridge"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
