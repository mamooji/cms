import React, { Fragment, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImageItem, imageData } from "@/lib/content/navItems";

const Hero = () => {
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageItem>();

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      {selectedImage && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedImage.title}</DialogTitle>
            <DialogDescription>{selectedImage.description}</DialogDescription>
          </DialogHeader>
          <Image
            src={selectedImage.src}
            alt="Image"
            className="rounded-md object-cover"
            width={500}
            height={500}
          />
        </DialogContent>
      )}

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
          <Carousel
            className="flex flex-col max-w-md"
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="shadow-lg">
              {imageData.map((img, index) => {
                return (
                  <Fragment key={index}>
                    <CarouselItem
                      onClick={() => {
                        setSelectedImage(img);
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
    </Dialog>
  );
};

export default Hero;
