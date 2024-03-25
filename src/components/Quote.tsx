import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Quote = () => {
  return (
    <div className="flex flex-col pb-10">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl font-bold tracking-tight transition-colors first:mt-0">
        CMS runs on your generous Donations
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6 font-semibold">
        Prophet ﷺ said:
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        &quot;Whosoever builds a Masjid for الله سبحانه وتعالى, الله سبحانه
        وتعالى will build for him a house in paradise.&quot;
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
  );
};

export default Quote;