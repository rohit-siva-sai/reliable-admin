import { useStore } from "@/useStore/store";
import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
const arrayExp = [
  { label: "Yrs of Exp", value: "" },
  {
    label: "0 - 3 Yrs Professional Experience",
    value: "0 - 3 Yrs",
  },
  {
    label: "3 - 8 Yrs Professional Experience",
    value: "3 - 8 Yrs",
  },
  {
    label: "8 - 12 Yrs Professional Experience",
    value: "8 - 12 Yrs",
  },
  {
    label: "12+ Yrs Professional Experience",
    value: "12+ Yrs",
  },
  {
    label: "clear filter",
    value: "clear filter",
  },
];

const ExpFilter = () => {
  const [talents, allTalents, updateTalents] = useStore((store) => [
    store.talents,
    store.allTalents,
    store.updateTalents,
  ]);

  const filterByExp = (value) => {
    if (value == "clear filter") {
      updateTalents(allTalents);
    } else {
      const data = allTalents.filter((item) => item.workExperience == value);

      updateTalents(data);
    }
  };
  return (
    <div className="relative w-fit">
      <select
        name="country"
        id=""
        value={"Yrs of Exp"}
        onChange={(e) => {
          filterByExp(e.target.value);
        }}
        className="border outline-none appearance-none w-48 px-4 cursor-pointer  z-10 rounded-md py-2  text-gray-500 focus:border-blue-600 border-green-600 "
      >
        {arrayExp.map((item) => {
          return <option value={item.value}>{item.label}</option>;
        })}
      </select>
      <RiArrowDownSFill
        className="text-gray-800 absolute  top-2 right-3 z-0"
        size={25}
      />
    </div>
  );
};

export default ExpFilter;
