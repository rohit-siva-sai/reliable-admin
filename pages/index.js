import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useStore } from "@/useStore/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ submitNewUser }) {
  const router = useRouter();

  useEffect(()=>{
    router.push("/talent")
  })

  
  return (
    <div className={`${inter.className}`}>
    
    </div>
  );
}
