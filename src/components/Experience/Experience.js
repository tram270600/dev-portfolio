import classNames from "classnames";
import { useCallback, useState } from "react";
import "./Experience.scss";

const EXPERIENCE_SECTION = {
  GOT_IT: "got-it",
  SHOPEE: "shopee",
  JH: "jh",
};

const Skill = ({ skill }) => (
  <span className="rounded-full bg-teal-400/25 px-3 py-1 text-white hover:text-teal-300 cursor-pointer">
    {skill}
  </span>
);

const experienceData = [
  {
    title: "Front-end developer",
    id: EXPERIENCE_SECTION.GOT_IT,
    companyName: "Got It Vietnam",
    time: "2022 - 2023",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    skills: [
      "ReactJs",
      "Typescript",
      "HTML",
      "CSS",
      "Javascript",
      "Jest",
      "Cypress",
    ],
  },
  {
    title: "Front-end developer",
    id: EXPERIENCE_SECTION.SHOPEE,
    companyName: "Shopee Vietnam",
    time: "2021 - 2022",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    skills: ["ReactJs", "Typescript", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Front-end developer",
    id: EXPERIENCE_SECTION.JH,
    companyName: "Journey Horizon",
    time: "2020 - 2021",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    skills: ["ReactJs", "HTML", "CSS", "Javascript", "NodeJs", "AWS"],
  },
];

const DescriptionItem = ({ content }) => (
  <div className="flex">
    <span className="text-[--green] text-xl">-</span>
    <p className="ml-2">{content}</p>
  </div>
);

export default function Experience() {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

  const handleSelectCompany = useCallback(
    (index) => setSelectedCompanyIndex(index),
    []
  );

  return (
    <>
      <h2 className="titleSection">My experiences</h2>
      <div className="flex flex-col md:flex-row px-0 md:px-8 max-w-full">
        <div
          id="companyList"
          className="companyList flex md:flex-col pr-5 max-w-full overflow-x-scroll md:overflow-visible"
        >
          {experienceData.map((experience, index) => (
            <button
              key={experience.companyName}
              className={classNames(
                "px-5 py-2 border-b md:border-l md:border-b-0 hover:bg-[--light-navy] whitespace-nowrap",
                selectedCompanyIndex === index
                  ? "text-[--green] border-b-[--green] lg:border-l-[--green]"
                  : "border-l-[--lightest-navy]"
              )}
              onClick={() => handleSelectCompany(index)}
            >
              {experience.companyName}
            </button>
          ))}
        </div>
        <div className="pt-2">
          <p className="text-[--green] text-2xl font-semibold">
            {experienceData[selectedCompanyIndex].title}
          </p>
          <p className="mb-5">{experienceData[selectedCompanyIndex].time}</p>
          <DescriptionItem content={experienceData[selectedCompanyIndex].p1} />
          <DescriptionItem content={experienceData[selectedCompanyIndex].p2} />
          <div className="flex gap-2 flex-wrap mt-5">
            {experienceData[selectedCompanyIndex].skills.map((skill) => (
              <Skill key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
