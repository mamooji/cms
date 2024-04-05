import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col mx-8 pt-8">
      <h1 className="scroll-m-20 py-4 text-5xl  font-extrabold tracking-tight lg:text-5xl">
        About <span className="text-primary">Us</span>
      </h1>
      <div className="grid md:grid-cols-2 md:grid-rows-4 gap-4 md:pb-24 ">
        <p className="leading-7 col-start-1">
          The Cambridge Muslim Society serves the thriving Muslim community of
          the city of Cambridge and all Canadians in general at large, located
          in the heart of southern Ontario. Approx. 100km south-west of Toronto,
          Cambridge together with the cities of Kitchener and Waterloo form the
          Tri-cities of Waterloo region.
        </p>
        <p className="leading-7 indent-8 col-start-1">
          The Society established in 1974, began offering the five daily
          prayers, and children’s Madrassah from a small residential apartment.
          In 1980, the CMS purchased a small rental warehouse and converted to a
          prayer hall. Daily services expanded to offering Juma/Eid prayers as
          well as funeral services. In 1985, the Society was registered
          (registration # 561084-39-15) with the government of Ontario, Canada.
        </p>
        <p className="leading-7 indent-8 col-start-1">
          Due to the growth of the Muslim population of Cambridge there was a
          significant need to create more space and increased facilities in
          order to accommodate this growing community. In 1989, one acre land
          was purchased to build a proper masjid to fulfill the needs of the
          Muslim community. After six years, construction began in 1995. In
          1997, Jamia Umar Al-Farooq Masjid was completed costing $1.3 million.
        </p>
        <p className="leading-7 indent-8 col-start-1">
          The Society is run by the democratically elected Executive Committee
          directed by the constitution of the Cambridge Muslim Society. This
          Executive body is elected at our annual General Body meeting of all
          voting right members, each spring. The Executive Committee is a 7 –
          member panel consisting of the President, Vice-president, treasurer,
          Gen. Secretary and 3 executive members.
        </p>
        <Image
          src="/images/madina.jpg"
          alt="Image"
          className="rounded-md  object-cover md:col-start-2 md:row-start-1 md:row-end-5 mx-auto"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default About;
