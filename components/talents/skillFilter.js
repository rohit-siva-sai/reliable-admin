import { useStore } from '@/useStore/store';
import React from 'react'
import { RiArrowDownSFill } from 'react-icons/ri';

const arraySkill = [
    "Primary Skill",
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Web Design",
    "Version Control (e.g., Git)",
    "Front-end Frameworks (e.g., React, Angular, or Vue)",
    "Web Development Tools (e.g., Webpack, Babel)",
    "APIs and RESTful Services",
    "Browser Developer Tools",
    "Basic UX/UI Design",
    "Programming Languages (e.g., Java, Python, C++, etc.)",
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Software Design Patterns",
    "Debugging and Profiling",
    "Database Management",
    "Software Development Life Cycle (SDLC)",
    "Testing and Test Automation",
    "Security Best Practices",
    "Cloud Platforms (e.g., AWS, Azure, GCP)",
    "Infrastructure as Code (e.g., Terraform, CloudFormation)",
    "Networking and Security in the Cloud",
    "Cloud Services (e.g., EC2, S3, Azure VMs)",
    "Scalability and High Availability",
    "Cloud Cost Management",
    "DevOps Practices",
    "Knowledge of Containers (e.g., Docker, Kubernetes)",
    "Monitoring and Logging",
    "Cloud Compliance and Governance",
    "Server-Side Programming (e.g., Node.js, Python, Java)",
    "Database Management (e.g., SQL, NoSQL)",
    "API Development",
    "Authentication and Authorization",
    "Web Servers (e.g., Apache, Nginx)",
    "Caching Strategies",
    "Microservices Architecture",
    "RESTful and GraphQL APIs",
    "Security Best Practices",
    "Programming Languages (e.g., Python, R)",
    "Data Analysis and Visualization",
    "Machine Learning Algorithms",
    "Data Cleaning and Preprocessing",
    "Statistical Analysis",
    "Big Data Technologies (e.g., Hadoop, Spark)",
    "Database Management (e.g., SQL, NoSQL)",
    "Data Mining",
    "Data Modeling",
    "Data Ethics and Privacy",
    "clear filter"
  ];

const SkillFilter = () => {
    const [talents, allTalents, updateTalents] = useStore((store) => [
        store.talents,
        store.allTalents,
        store.updateTalents,
      ]);
    
      const filterBySkill = (value) => {
        if (value == "clear filter") {
          updateTalents(allTalents);
        } else {
          const data = allTalents.filter((item) => item.primarySkill == value);
    
          updateTalents(data);
        }
      };
  return (
    <div className="relative w-fit">
        <select
          name="country"
          id=""
          value={"Primary Skill"}
          onChange={(e) => {
            
            filterBySkill(e.target.value);
          }}
          className="border outline-none appearance-none w-48 px-4 cursor-pointer  z-10 rounded-md py-2  text-gray-500 focus:border-blue-600 border-green-600 "
        >
          {arraySkill.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <RiArrowDownSFill
          className="text-gray-800 absolute  top-2 right-3 z-0"
          size={25}
        />
      </div>
  )
}

export default SkillFilter
