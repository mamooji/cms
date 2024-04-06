import React, { Fragment, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { imageData } from "@/lib/content/navItems";

const Hero = () => {

  const [modal, setModal] = useState(false);
  return (
    // <Dialog open={modal} onOpenChange={setModal}>
    <div className=" flex flex-col md:flex-row md:justify-center md:items-center md:pt-16 pb-10 lg:pb-20 ">
      <div className="flex flex-col md:pl-6 pt-8 pb-16 md:py-0  md:w-1/2">
        <h1 className="scroll-m-20 break-words text-5xl lg:text-7xl font-extrabold tracking-widest whitespace-pre-wrap max-w-md">
          Cambridge{"\n"}
          <span className="text-primary">Muslim</span>
          {"\n"}
          Society
        </h1>
      </div>

      <div className="flex flex-col  items-center md:py-0 md:w-1/2 md:items-end">
        <Carousel className="flex flex-col max-w-md ">
          <CarouselContent className="shadow-lg">
            {imageData.map((img, index) => {
              // const [modal, setModal] = useState(false);
              return (
                <Fragment key={index}>
                  <Dialog open={modal} onOpenChange={setModal}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{img.title}</DialogTitle>
                        <DialogDescription>{img.description}</DialogDescription>
                      </DialogHeader>
                      <Image
                        src={img.src}
                        alt="Image"
                        className="rounded-md object-cover"
                        width={500}
                        height={500}
                      />
                    </DialogContent>
                  </Dialog>
                  <CarouselItem
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    <div className="h-63 w-63 relative">
                      <Image
                        src={img.src}
                        width={500}
                        height={500}
                        alt={img.alt}
                        className=" rounded-xl object-cover aspect-square"
                      />
                    </div>
                  </CarouselItem>
                </Fragment>
              );
            })}
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
