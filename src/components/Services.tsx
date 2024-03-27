import React from "react";

const Services = () => {
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0  mb-4">
        Services
      </h2>
      <div className="pt-2 grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-4 ">
        <div className="rounded-lg bg-secondary-50 h-20"></div>
        <div className="rounded-lg bg-secondary-100 h-20"></div>
        <div className="rounded-lg bg-secondary-200 h-20"></div>
        <div className="rounded-lg bg-secondary-300 h-20"></div>
        <div className="rounded-lg bg-secondary-400 h-20"></div>
        <div className="rounded-lg bg-secondary-500 h-20"></div>
      </div>
    </>
  );
};

export default Services;
