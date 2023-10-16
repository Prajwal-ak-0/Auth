import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen">
      <div>
        <Image 
          src="/hero.jpg" 
          alt="Login page image" 
          width={700}
          height={500} 
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default page;
