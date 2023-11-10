import { useStore } from "@/useStore/store";
import { Timestamp } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import Skills from "./skills";
import { useState } from "react";
import CountFilter from "./countFilter";
import MainSkillFilter from "./mainSkillFilter";
import AddSkillFilter from "./addSkillFilter";

const CustomerTable = () => {
  const [customers] = useStore((store) => [store.customers]);
  // console.log("talents", customers);
  const [showSkills, setShowSkills] = useState(false);
  const [indexi, setIndexi] = useState(null);

  const func = (time) => {
    const date = new Date(time && time["seconds"] * 1000);
    return date.toLocaleDateString();
  };
  return (
    <div className="flex flex-col  ">
      <div className="self-end mb-6 space-x-4 flex items-center">
        <CountFilter />
        <MainSkillFilter/>
        <AddSkillFilter/>
      </div>
      <div className="grid text-sm grid-cols-10 gap-x-2 bg-slate-300 py-2 px-8 rounded font-semibold text-gray-700">
        <p>No</p>
        <p>Date</p>
        <p>Name</p>
        <p>Work Email</p>
        <p>Phone Number</p>
        <p>Employee Count</p>
        <p>Public Ipo Comapny</p>
        <p>Venture Capital Fund</p>
        <p>Hiring Needs</p>
        <p>Skills</p>
      </div>
      {customers.length > 0 ? (
        <div className="flex flex-col ">
          {customers.map((item, index) => {
            return (
              <div className="relative ">
                <div
                  className={`grid grid-cols-10 gap-x-2 px-8 ${
                    (index + 1) % 2 == 0 ? "bg-gray-200" : "bg-gray-100"
                  } py-4  font-medium text-sm text-gray-600   border-b  overflow-hidden  `}
                >
                  <p className="">{index + 1}</p>
                  <p className="">{func(item.timestamp)}</p>
                  <p className="">{item.username}</p>
                  <p className="">{item.workEmail}</p>
                  <p className="">{item.phoneNumber}</p>
                  <p className="">{item.employeeCount}</p>
                  <p className="">{item.publicIpoCompany}</p>
                  <p className="">{item.ventureCapitalFund}</p>

                  <p className="">{item.hiringNeed}</p>
                  <div
                    onMouseOver={() => {
                      setShowSkills(true);
                      setIndexi(index);
                    }}
                    onMouseLeave={() => {
                      setShowSkills(false);
                      setIndexi(null);
                    }}
                    className="cursor-pointer"
                  >
                    <p>Show SKill</p>
                  </div>
                </div>
                {showSkills && index == indexi && (
                  <div className="absolute top-10 shadow px-2 py-4 z-10  right-4  border bg-gray-50">
                    <Skills
                      mainSkills={item.mainSkills}
                      addSkills={item.additionalSkills}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="font-semibold text-gray-600 text-xl text-center py-12">
          No Data Available
        </div>
      )}
    </div>
  );
};

export default CustomerTable;
