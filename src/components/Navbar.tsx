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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Icons } from "./icons";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="flex w-full mx-auto justify-between m-4 ">
      <NavigationMenu>
        <NavigationMenuList className=" md:hidden">
          <Sheet open={sideBar} onOpenChange={setSideBar}>
            <Button
              variant="outline"
              onClick={() => setSideBar(!sideBar)}
              size={"icon"}
            >
              <Icons.hamburger />
            </Button>
            <SheetContent side={"left"}>
              <SheetHeader></SheetHeader>
              <NavigationMenuList className="flex flex-col">
                {navData.map((navItem, index) => {
                  return (
                    <NavigationMenuItem key={index}>
                      <Link
                        href={navItem.url}
                        legacyBehavior
                        type="submit"
                        passHref
                      >
                        <NavigationMenuLink
                          onClick={() => setSideBar(false)}
                          className={navigationMenuTriggerStyle()}
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
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
  );
};

export default Navbar;
