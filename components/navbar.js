import React from "react";
import { useState } from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Sidebar from "./sidebar";
import { useStore } from "@/useStore/store";

const Navbar = () => {
  // const [showSideBar, updateShowSidebar] = useStore((store) => [
  //   store.showSideBar,
  //   store.updateShowSidebar,
  // ]);

  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div
     className=""
    >
      <div className="flex py-2 items-center px-10 space-x-8  shadow">
        <div
          className="cursor-pointer"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        >
          <TbAdjustmentsHorizontal size={23} className="text-gray-800" />
        </div>
        <div className="text-gray-700 font-semibold text-2xl">Uptal.</div>
      </div>
      {/* {showSideBar && (
        <div className="absolute left-0 top-8">
          <Sidebar />
        </div>
      )} */}
      <div
         onClick={() => {
          setShowSideBar(false);
         
        }}
        className={`${
          showSideBar
            ? "translate-x-0 w-full bg-gray-500/50"
            : "-translate-x-64"
        }  transition-all duration-500 absolute z-50`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
