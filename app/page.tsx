import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className=" h-full flex">
        <div className="mx-auto">
          <Image
            src="/lock.png"
            alt="Login page image"
            width={500}
            height={500}
            className="hidden md:block"
          />
        </div>
        <div className=" mx-auto mt-16">
          <LoginForm/>
        </div>
      </div>
    </div>
  );
};

export default page;
