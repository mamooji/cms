"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { navData } from "@/lib/content/navItems";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div
      className="sticky top-0 shadow-lg dark:shadow-primary z-10
    "
    >
      <div className="flex w-full mx-auto justify-between p-4  max-w-7xl bg-background">
        <NavigationMenu>
          <NavigationMenuList className=" md:hidden ">
            <Sheet open={sideBar} onOpenChange={setSideBar}>
              <Button
                variant="outline"
                onClick={() => setSideBar(!sideBar)}
                size={"icon"}
              >
                <Icons.hamburger />
              </Button>
              <SheetContent side={"left"} className=" overflow-scroll">
                <SheetHeader
                  className="mb-8
                 font-extrabold text-xl tracking-wider "
                >
                  Navigation Menu
                </SheetHeader>
                <NavigationMenuList className="flex flex-col gap-4 ">
                  {navData.map((navItem, index) => {
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <Link href={navItem.url} legacyBehavior passHref>
                          <NavigationMenuLink
                            onClick={() => setSideBar(false)}
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "capitalize font-bold text-lg tracking-wide h-20 w-full "
                            )}
                          >
                            {navItem.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </SheetContent>
            </Sheet>
          </NavigationMenuList>
          <NavigationMenuList className="hidden md:flex">
            {navData.map((navItem, index) => {
              return (
                <NavigationMenuItem key={index}>
                  <Link href={navItem.url} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "capitalize "
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
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
