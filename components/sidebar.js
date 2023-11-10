import { useStore } from "@/useStore/store";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const Sidebar = () => {
  const [showSideBar, updateShowSidebar] = useStore((store) => [
    store.showSideBar,
    store.updateShowSidebar,
  ]);
  const [active, setActive] = useState("talent");

  return (
    <div className="">
      <div className="flex flex-col space-y-6 py-8 px-4  h-[680px] w-64 bg-gray-900 text-white ">
        <Link href={"/talent"}>
          <div
            className={`flex items-center space-x-3 ${
              active == "talent" ? "bg-gray-600/50" : "bg-transparent"
            }  font-semibold px-4 py-2 hover:bg-gray-600/50 rounded-lg`}
            onClick={()=>{setActive("talent")}}
          >
            <HiOutlineRectangleStack size={22} />
            <p className="">Talents Form</p>
          </div>
        </Link>
        <Link href={"/customer"}>
          <div
            className={`flex items-center space-x-3 ${
              active == "customer" ? "bg-gray-600/50" : "bg-transparent"
            }  font-semibold px-4 py-2 hover:bg-gray-600/50 rounded-lg`}
            onClick={()=>{setActive("customer")}}
          >
            <FaRegUser size={20} />
            <p>Customer Form</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
