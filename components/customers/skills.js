import React from "react";

const Skills = ({ mainSkills, addSkills }) => {
  return (
    <div className=" flex flex-col shadow px-2 py-4 space-y-2  border bg-gray-100">
      <div className="text-sm text-gray-800  flex flex-col space-y-2">
        <p className="text-black">Main Skills</p>
        <div className="">
          {mainSkills.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col border-t pt-2 border-black text-gray-600 text-sm space-y-2">
        <p className="text-black">Additional Skills</p>
        <div>
        {addSkills.map((item) => (
          <p>{item}</p>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
