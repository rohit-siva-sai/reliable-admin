import { useStore } from "@/useStore/store";
import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const CountFilter = () => {
  const [customers, allCustomers, updateCutomers] = useStore((store) => [
    store.customers,
    store.allCustomers,
    store.updateCutomers,
  ]);
  // console.log('sas',allCustomers);
  
  const arrayCount = ["Emply Count","1 - 10", "11 - 50", "51 - 250", "251 - 1K", "1K+","clear filter"];

  const filterByCount = (value) => {
    if (value == "clear filter") {
      updateCutomers(allCustomers);
    } else {
      const data = allCustomers.filter((item) => item.employeeCount == value);

      updateCutomers(data);
    }
  };
  return (
    <div className="relative w-fit">
      <select
        name="country"
        id=""
        value={"Emply Count"}
        onChange={(e) => {
          filterByCount(e.target.value);
        }}
        className="border outline-none appearance-none w-48 px-4 cursor-pointer  z-10 rounded-md py-2  text-gray-500 focus:border-blue-600 border-green-600 "
      >
        {arrayCount.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      <RiArrowDownSFill
        className="text-gray-800 absolute  top-2 right-3 z-0"
        size={25}
      />
    </div>
  );
};

export default CountFilter;
