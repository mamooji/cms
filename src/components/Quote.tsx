import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Quote = () => {
  return (
    <div className="flex flex-col pb-10 lg:pb-20 ">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        CMS runs on your generous Donations
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6 font-semibold lg:text-2xl">
        Prophet ﷺ said:
      </p>
      <blockquote className="mt-6 lg:text-center lg:text-xl border-l-2 pl-6 italic whitespace-pre-wrap">
        &quot;Who so ever builds a Masjid for الله سبحانه وتعالى{"\n"} الله
        سبحانه وتعالى{"\n"} will build for him a house in paradise.&quot;
      </blockquote>
      <Link
        className={cn(
          buttonVariants({ variant: "outline" }),
          "bg-primary mx-auto max-w-md p-6 my-8 rounded-xl w-full text-white dark:text-black font-bold  text-3xl"
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
