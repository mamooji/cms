import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center px-2 justify-center space-x-4 text-sm">
          <div className="flex flex-col justify-center">
            <p>Phone: 519-623-0568</p>
            <p>Fax: 519-623-0564</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col justify-center">
            <p>Contact Us: farooqmasjid@outlook.com</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col justify-center">
            <p>© 2020 Muhammad Mamooji</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
