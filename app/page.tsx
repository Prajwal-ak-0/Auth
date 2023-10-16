"use client";

import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" h-full flex">
      <div>
        <Image 
          src="/hero.png" 
          alt="Login page image" 
          width={700}
          height={500} 
          className="hidden md:block"
        />
      </div>
      <div className="mx-auto mt-10">
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
