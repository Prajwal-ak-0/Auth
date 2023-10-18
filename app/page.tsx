"use client";

import LoginForm from "@/components/LoginForm";
import { SessionProvider, useSession } from "next-auth/react"
import Image from "next/image";
export default function HomePage({
  children
}:{
  children: React.ReactNode;
}) {
  
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
          <LoginForm />
        </div>
      </div>
    </div>
  )
}