import { useStore } from '@/useStore/store';
import React from 'react'
import { RiArrowDownSFill } from 'react-icons/ri';

const arraySkills = [
  {
    name: "Main Skill",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    value: false,
  },
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    value: false,
  },
  {
    name: "Node.js",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx4zAJGpThQNtuU028R37iIMFvJzLiwu9iyuxz8PRrb_FgPAQO",
    value: false,
  },
  {
    name: "Python",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsIz7tbcCJ8Uxgb6NBSa3etUfrToZGmHzwI9anTFFAoK4zvZc",
    value: false,
  },
  {
    name: "Swift",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0KzOMtN96bWUn35VP8k8U5024JcBKMqYAbZFyd-TxicABdcT",
    value: false,
  },
  {
    name: "Android",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMmEipz7I0wnnY5ABvnRtOct3i-vIOnG5-HzeC1DSp0JzZvhQ4",
    value: false,
  },
  {
    name: "Go",
    imageUrl:
      "https://t3.gstatic.com/images?q=tbn:ANd9GcTJSPtnaRdSq7kQnYPWkDYutMLgjahxrpLpx8-SPaUp79qCeMok",
    value: false,
  },
  {
    name: "Devops",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQh3g35Tc5KRQMaZMVA3y7zbuSL2wdNls4ZmGQNLXMJ_NZjv3cU",
    value: false,
  },
  {
    name: "Machine Learning",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScF-fKCOuRBQKJ694tXDs6DripQTl5HgpFNzLPF_TlhafJieI4",
    value: false,
  },
  {
    name: "Data Engineer",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQj9aBjBKHCpM7NjV9JlFDudx1Uj9QVmODSWsoVfJUgQoJ70Ziz",
    value: false,
  },
  {
    name: "Typescript",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5a_H-yhkguAvnFqCG8VSD0HGNTGa5y9vSWKttXUJhubx9bRVp",
    value: false,
  },
  {
    name: "Scala",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvSuu4NWUNlhNO56uFBPHmTeDWlB6K1Fsbu-Hgar7vsCLYFroO",
    value: false,
  },
  {
    name: "TensorFlow",
    imageUrl:
      "https://seeklogo.com/images/T/tensorflow-logo-02FCED4F98-seeklogo.com.png",
    value: false,
  },
  {
    name: "Analytical Skills",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3NC2RPeUD0mVarovTApcoeBRyN8uW0axPw&usqp=CAU",
    value: false,
  },
  {
    name: "Data Visualization",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Jte6HnlS8ItU6gxZe66MW548hokFLC93i3LQr2kBa5KgqszVsQH_rNZqvyfijcmR6IE&usqp=CAU",
    value: false,
  },
  {
    name: "Data Warehousing",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT117AUCg1DgahGSw0kOR5EZZNFBCX0uD5FWTIvuNC6JWfgMhC4Z79QTeGbd4ksgzN8W0w&usqp=CAU",
    value: false,
  },
  {
    name: "C++",
    imageUrl:
      "https://www.freeiconspng.com/thumbs/c-logo-icon/c--logo-icon-0.png",
    value: false,
  },
  {
    name: "Deep Learning",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-AjDbpzq6VVAQrpKj7qk1C3hS3-o4kk4xg&usqp=CAU",
    value: false,
  },
  {
    name: "clear filter",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-AjDbpzq6VVAQrpKj7qk1C3hS3-o4kk4xg&usqp=CAU",
    value: false,
  },
];


const MainSkillFilter = () => {
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
      const data = allCustomers.filter((item) => item.mainSkills.includes(value));

      updateCutomers(data);
    }
  };
  return (
    <div className="relative w-fit">
      <select
        name="country"
        id=""
        value={"Main Skill"}
        onChange={(e) => {
          filterBySkill(e.target.value);
        }}
        className="border outline-none appearance-none w-48 px-4 cursor-pointer  z-10 rounded-md py-2  text-gray-500 focus:border-blue-600 border-green-600 "
      >
        {arraySkills.map((item) => {
          return <option value={item.name}>{item.name}</option>;
        })}
      </select>
      <RiArrowDownSFill
        className="text-gray-800 absolute  top-2 right-3 z-0"
        size={25}
      />
    </div>
  )
}

export default MainSkillFilter
