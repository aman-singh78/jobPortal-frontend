import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const NavBar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse </li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className="w-12 rounded-lg"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div>
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      className="w-12 rounded-lg"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium"> Aman Mernstack</h3>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
