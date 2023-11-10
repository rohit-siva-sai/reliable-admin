import { useStore } from "@/useStore/store";
import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
const arrayAddSkill = [
    { value: "additional Skills", label: "Additional Skills" },
    { value: "analytical_thinking", label: "Analytical Thinking" },
    { value: "communication", label: "Communication" },
    { value: "critical_thinking", label: "Critical Thinking" },
    { value: "creativity", label: "Creativity" },
    { value: "data_analysis", label: "Data Analysis" },
    { value: "decision_making", label: "Decision Making" },
    { value: "digital_marketing", label: "Digital Marketing" },
    { value: "leadership", label: "Leadership" },
    { value: "problem_solving", label: "Problem Solving" },
    { value: "project_management", label: "Project Management" },
    { value: "public_speaking", label: "Public Speaking" },
    { value: "research", label: "Research" },
    { value: "sales", label: "Sales" },
    { value: "social_media_marketing", label: "Social Media Marketing" },
    { value: "teamwork", label: "Teamwork" },
    { value: "time_management", label: "Time Management" },
    { value: "adaptability", label: "Adaptability" },
    { value: "customer_service", label: "Customer Service" },
    { value: "negotiation", label: "Negotiation" },
    { value: "programming", label: "Programming" },
    { value: "writing", label: "Writing" },
    { value: "networking", label: "Networking" },
    { value: "financial_analysis", label: "Financial Analysis" },
    { value: "graphic_design", label: "Graphic Design" },
    { value: "strategic_planning", label: "Strategic Planning" },
    { value: "clear filter", label: "clear filter" },
  ];
  

const AddSkillFilter = () => {
  const [customers, allCustomers, updateCutomers] = useStore((store) => [
    store.customers,
    store.allCustomers,
    store.updateCutomers,
  ]);
  // console.log('sas',allCustomers);

  const filterBySkill = (value) => {
    if (value == "clear filter") {
      updateCutomers(allCustomers);
    } else {
      const data = allCustomers.filter((item) =>
        item.additionalSkills.includes(value)
      );

      updateCutomers(data);
    }
  };
  return (
    <div className="relative w-fit">
      <select
        name="country"
        id=""
        value={"Additional Skills"}
        onChange={(e) => {
          filterBySkill(e.target.value);
        }}
        className="border outline-none appearance-none w-48 px-4 cursor-pointer  z-10 rounded-md py-2  text-gray-500 focus:border-blue-600 border-green-600 "
      >
        {arrayAddSkill.map((item) => {
          return <option value={item.label}>{item.label}</option>;
        })}
      </select>
      <RiArrowDownSFill
        className="text-gray-800 absolute  top-2 right-3 z-0"
        size={25}
      />
    </div>
  );
};

export default AddSkillFilter;
