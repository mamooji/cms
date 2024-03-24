"use client";
import React from "react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import MasjidForm from "@/components/MasjidForm";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row mx-8">
      <div className="flex flex-col pt-8 pb-16 ">
        <h1
          className="scroll-m-20  whitespace-break-spaces  text-5xl font-extrabold tracking-widest
       "
        >
          Cambridge
        </h1>
        <h1
          className="scroll-m-20 whitespace-break-spaces  text-5xl font-extrabold tracking-widest text-primary
       "
        >
          Muslim
        </h1>
        <h1
          className="scroll-m-20  whitespace-break-spaces  text-5xl font-extrabold tracking-widest
       "
        >
          Society
        </h1>
      </div>

      <div className="flex flex-col pb-20">
        <Carousel className="">
          <CarouselContent>
            <CarouselItem>
              <div className="h-63 w-63 relative">
                <Image
                  src="/images/masjid.jpg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="rounded-xl object-cover aspect-square" // just an example
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className=" my-2" />
          <CarouselNext className="my-2 " />
        </Carousel>
      </div>
      <div className="flex flex-col pb-20">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl font-bold tracking-tight transition-colors first:mt-0">
          CMS runs on your generous Donations
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 font-semibold">
          Prophet ﷺ said:
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          "Whosoever builds a Masjid for الله سبحانه وتعالى, الله سبحانه وتعالى
          will build for him a house in paradise."
        </blockquote>
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "bg-primary p-6 my-8 rounded-xl w-full text-white dark:text-black font-bold  text-3xl"
          )}
          href={"https://app.irm.io/cambridgemuslimsociety.org"}
          target="_blank"
          passHref
        >
          Donate Today
        </Link>
      </div>
      <div className="flex flex-col pb-20">
        <MasjidForm />
      </div>

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
