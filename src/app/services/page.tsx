import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { servicesData } from "@/lib/content/navItems";

const Services = () => {
  return (
    <div className="flex flex-col mx-8 pt-8">
      <h1 className="scroll-m-20 py-4 text-5xl  font-extrabold tracking-tight lg:text-5xl">
        Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
        {servicesData.map((service) => {
          return (
            <Card key={service.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {service.name}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
