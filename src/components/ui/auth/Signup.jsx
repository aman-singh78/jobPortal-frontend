import React from "react";
import NavBar from "../shared/NavBar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../input";
import { RadioGroup, RadioGroupItem } from "../radio-group";

const Signup = () => {
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">SignUp</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="Aman" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="aman@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="xvj12@%" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="number" placeholder="+91" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
