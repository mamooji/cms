"use client";
import React from "react";
import Image from "next/image";

import { navData } from "@/lib/content/navItems";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Footer: React.FC = () => {
  return (
    <div className="bottom-0 z-10 w-full border-t-2 ">
      <div className="max-w-7xl flex flex-col mx-auto px-8 pb-8">
        <Image
          src="/images/logo.png"
          width={150}
          height={150}
          alt="Picture of the author"
          className=" w-50 bg-inherit py-8"
        />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Quick Links
        </h3>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col md:flex-row md:gap-4 items-start space-x-0 pb-8 ">
            {navData.map((navItem, index) => {
              return (
                <NavigationMenuItem key={index} className="">
                  <Link href={navItem.url} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "px-0 underline hover:bg-inherit hover:text-primary"
                      )}
                    >
                      {navItem.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <p>Phone: 519-623-0568</p>
        <p>Fax: 519-623-0564</p>
        <p>Contact Us: farooqmasjid@outlook.com</p>
        <p>© 2020 Muhammad Mamooji</p>
      </div>
    </div>
  );
};

export default Footer;
