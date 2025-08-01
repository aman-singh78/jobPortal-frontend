import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-center ">
      <div className="flex flex-col gap-5 my-10">
        <span className="px-4 py-2  mx-auto rounded-full bg-gray-200 text-[#F83002] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          ratione nobis magnam reiciendis soluta.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center mx-auto">
          <input
            type="text"
            placeholder="Find Your Dream Jobs"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
