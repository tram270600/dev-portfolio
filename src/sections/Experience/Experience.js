import classNames from "classnames";
import { useCallback, useState } from "react";
import "./Experience.scss";
import FloatingShape from "components/FloatingShape/FloatingShape";

const EXPERIENCE_SECTION = {
  NETCOMPANY: "netcompany",
  JH: "jh",
  SSSMARKET: "sssmarket",
};

const Skill = ({ skill }) => (
  <span className="rounded-full bg-teal-400/25 px-3 py-1 text-white hover:text-teal-300 cursor-pointer">
    {skill}
  </span>
);

const experienceData = [
  {
    title: "Front-end developer",
    id: EXPERIENCE_SECTION.NETCOMPANY,
    companyName: "Netcompany",
    time: "Nov-2022 - present",
    contents: [
      "Developing and maintaining the Front-end of web-based applications", 
      "Authored comprehensive documents including Analysis, Design, Integration and Maintenance guides", 
      "Experienced with React, and Angular, applied advanced principles like TDD, CDD, SOLID and OOP", 
      "Integrate with core system, develop API endpoint with RESTful API principles, and RPC protocols", 
      "Wrote unit tests for every new feature to identify and rectify bugs",
      "Familiar with using CI/CD pipelines with Jenkins, and Azure DevOps."
    ],
    skills: [
      "ReactJs",
      "Typescript",
      "HTML",
      "CSS",
      "Javascript",
      "Jest",
      "React Testing library",
      "Jenkins",
      "Azure DevOps",
      "Storybook"
    ],
  },
  {
    title: "Software developer",
    id: EXPERIENCE_SECTION.JH,
    companyName: "Journey Horizon",
    time: "Oct-2020 - Jun-2022",
    contents: [
      "Design analysis and build UI responsive for variant breakpoints applying a mobile-first approach",
      "Practive designing emails using specific HTML and CSS support, considering limitations in email rendering for some CSS properties",
      "Implement and test responsive emails on different Email Service Providers (ESP)",
      "Utilize Git for version control, managing code repositories, branching, merging",
      "Knowledge of SEO principles and best practices",
      "Understanding WKAG Standards"
    ],
    skills: ["ReactJs", "HTML", "CSS", "Javascript", "NodeJs", "MailChimp"],
  },
  {
    title: "UI/UX Designer",
    id: EXPERIENCE_SECTION.SSSMARKET,
    companyName: "SSSMarket",
    time: "Jul-2022 - Oct-2022",
    contents: [
      "Taking responsibility for conducting ideas, creating engaging and user-friendly digital interfaces for websites, mobile applications, and other interactive media",
      "Specializing in Ideation & Prototyping, User-Centered Design, Metrics-Driven Design, Iterative Design, Prototyping & Testing, and Design Systems",
      "Conducting user research, creating personas, and mapping user journeys to inform design decisions.",
      "Generating innovative ideas through brainstorming sessions and sketching, translating concepts into wireframes, mockups, and interactive prototypes using tools like Figma, Mirco, Whimsical.",
    ],
    skills: ["Figma", "Fig jam", "Micro", "Metabase",  "Wix"],
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
      <FloatingShape shape='circle'></FloatingShape>
      <h2 className="titleSection">Experiences</h2>
      <div className="flex flex-col md:flex-row px-0 md:px-8 max-w-full">
        <div
          id="companyList"
          className="companyList flex md:flex-col pr-5 max-w-full overflow-x-scroll md:overflow-visible"
        >
          {experienceData.map((experience, index) => (
            <button
              key={experience.companyName}
              className={classNames(
                "h-12 hover mb-1 px-5 py-2 border-b md:border-l md:border-b-0 md:text-left hover:bg-[--green-shadow] whitespace-nowrap",
                selectedCompanyIndex === index
                  ? "text-[--green] border-b-[--green] lg:border-l-[--green]"
                  : "border-l-[--green-shadow]"
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
          {experienceData[selectedCompanyIndex].contents.map((content) => (<DescriptionItem content={content} />))}
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
