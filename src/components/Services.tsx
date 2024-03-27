import { servicesData } from "@/lib/content/navItems";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0  mb-4">
        Services
      </h2>
      <div className="pt-2 grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-4 ">
        {servicesData.map((service) => {
          return (
            // <div className="rounded-lg text-center bg-secondary-50 justify-center items-center h-20">
            //   {service.name}
            // </div>
            <Link
              href={service.url}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                " capitalize p-8 rounded-xl"
              )}
            >
              {service.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Services;
