"use client";

import Image from "next/image";

export const Logo = () => (
    <Image
      src="/logo.jpg"
      alt="Logo"
      width={60}
      height={60}
    />
);