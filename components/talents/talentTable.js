import { useStore } from "@/useStore/store";
import { Timestamp } from "firebase/firestore";
import Link from "next/link";
import React from "react";

import RoleFilter from "./roleFilter";
import SkillFilter from "./skillFilter";
import ExpFilter from "./expFilter";

const TalentTable = () => {
  const [talents] = useStore((store) => [store.talents]);
  // console.log("talents", talents);

  const func = (time) => {
    const date = new Date(time && time["seconds"] * 1000);

    return date.toLocaleDateString();
  };
  return (
    <div className="flex flex-col  ">
      <div className="self-end mb-6 space-x-4 flex items-center">
      <RoleFilter />
      <SkillFilter/>
      <ExpFilter/>
      </div>
      <div className="grid text-sm grid-cols-10 gap-x-2 bg-slate-300 py-2 px-8 rounded font-semibold text-gray-700">
        <p>No</p>
        <p>Date</p>
        <p>Name</p>
        <p>Email</p>
        <p>Phone Number</p>
        <p>Role</p>
        <p>Skill</p>
        <p>Resume</p>
        <p>Country</p>
        <p>Years of Exp</p>
      </div>
      {talents.length > 0 ? (
        <div className="flex flex-col ">
          {talents.map((item, index) => {
            return (
              <div
                className={`grid grid-cols-10 text-sm  gap-x-2 px-8 ${
                  (index + 1) % 2 == 0 ? "bg-gray-200" : "bg-gray-100"
                } py-4    font-medium text-gray-600  border-b  overflow-hidden`}
              >
                <p className="">{index + 1}</p>
                <p className="">{func(item.timestamp)}</p>
                <p className="">{item.username.lastName}</p>
                <p className="">{item.email}</p>
                <p className="">{item.phoneNumber}</p>
                <p className="">{item.primaryRole}</p>
                <p className="">{item.primarySkill}</p>
                <Link href={item.resume} target="_blank">
                  <p className="hover:text-blue-500">resume pdf</p>
                </Link>
                <p className="">{item.country}</p>
                <p className="">{item.workExperience}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="font-semibold text-gray-600 text-xl text-center py-12">No Data Available</div>
      )}
    </div>
  );
};

export default TalentTable;
