import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <div className=" flex flex-col md:flex-row md:justify-center md:items-center md:pt-16">
      <div className="flex flex-col md:pl-6 pt-8 pb-16 md:py-0  md:w-1/2">
        <h1 className="scroll-m-20 break-words text-5xl font-extrabold tracking-widest whitespace-pre-wrap max-w-md">
          {"Cambridge\nMuslim\nSociety"}
        </h1>
      </div>

      <div className="flex flex-col pb-20 items-center md:py-0 md:w-1/2 md:items-center">
        <Carousel className="flex flex-col max-w-md">
          <CarouselContent>
            <CarouselItem>
              <div className="h-63 w-63 relative">
                <Image
                  src="/images/masjid.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className=" rounded-xl object-cover aspect-square"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-63 w-63 relative">
                <Image
                  src="/images/masjid.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="rounded-xl object-cover aspect-square"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex w-full justify-between">
            <CarouselPrevious className=" my-2" />
            <CarouselNext className="my-2 " />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
