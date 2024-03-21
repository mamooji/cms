import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1 className="scroll-m-20 py-4 text-4xl  text-center font-extrabold tracking-tight lg:text-5xl">
        Cambridge Muslim Society
      </h1>

      <div className="flex flex-col justify-center h-full">
        <div className="pb-2">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
