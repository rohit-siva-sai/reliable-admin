import { useStore } from "@/useStore/store";
import React, { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
const arrayRole = [
  "Primary Role",
  "Web Developer",
  "Data Scientist",
  "Cloud Architect",
  "Backend Developer",
  "Software Engineer",
  "clear filter",
];

const RoleFilter = () => {
  const [role, setRole] = useState();
  const [talents, allTalents, updateTalents] = useStore((store) => [
    store.talents,
    store.allTalents,
    store.updateTalents,
  ]);

  const filterByRole = (value) => {
    if (value == "clear filter") {
      updateTalents(allTalents);
    } else {
      const data = allTalents.filter((item) => item.primaryRole == value);

      updateTalents(data);
    }
  };

  return (
    <div className="">
      <div className="relative w-fit">
        <select
          name="country"
          id=""
          value={"Primary Role"}
          onChange={(e) => {
            setRole(e.target.value);
            filterByRole(e.target.value);
          }}
          className="border outline-none appearance-none w-48 px-4 cursor-pointer  z-10 rounded-md py-2  text-gray-500 focus:border-blue-600 border-green-600 "
        >
          {arrayRole.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <RiArrowDownSFill
          className="text-gray-800 absolute  top-2 right-3 z-0"
          size={25}
        />
      </div>
    </div>
  );
};

export default RoleFilter;
