import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useStore } from "@/useStore/store";
import { AiFillLock } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ submitNewUser }) {
  const router = useRouter();

  useEffect(()=>{
    const user = JSON.parse(JSON.stringify(localStorage.getItem("user")))
    if(user)
    router.push("/talent")

   
  })

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={`${inter.className}`}>
      <Toaster
        toastOptions={{
          duration: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      <div className="flex justify-center flex-col items-center space-y-8 my-24 ">
        <div className="relative">
          <input
            type="text"
            name="firstName"
            value={username}
            id=""
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Login Id"
            className="border outline-none w-full   rounded-md py-2 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          />
          <FaUser
            className="text-gray-400 absolute top-2 opacity-50 left-4"
            size={21}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            name="firstName"
            value={password}
            id=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            className="border outline-none w-full   rounded-md py-2 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          />
          <AiFillLock
            className="text-gray-400 absolute top-2 opacity-50 left-4"
            size={22}
          />
        </div>
        <div
          className="border px-8 font-semibold text-gray-700 border-green-600 cursor-pointer hover:bg-gray-100 hover:border-blue-600 py-2 rounded-md "
          onClick={() => {
            if (!username || !password) {
              toast.error("Please fill all fields!");
            } else {
              if (username == "admin@admin.com" && password == "admin@123") {
                localStorage.setItem("user",JSON.stringify("admin123"))
                toast.success("Successfully Logedin");
                router.push("/talent");
              } else {
                toast.error("Incorrect details!");
              }
            }
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}
