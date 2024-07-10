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
    contents: ["Participate in the development of the educational website system.", "The project I mainly work on is Studyboots. This is a whiteboard website. Students and professionals can interact directly by voice, chat, and drawing."],
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
    title: "Software developer",
    id: EXPERIENCE_SECTION.JH,
    companyName: "Journey Horizon",
    time: "Oct-2020 - Jun-2022",
    contents: ["Working with marketplace website. Build Front-end with ReactJs and Back-end with NodeJs. Deploy website to AWS. Install and apply Voucherify, and many features using AWS services.", "Meeting and communicating with customers in English."],
    skills: ["ReactJs", "HTML", "CSS", "Javascript", "NodeJs", "AWS"],
  },
  {
    title: "UI/UX Designer",
    id: EXPERIENCE_SECTION.SSSMARKET,
    companyName: "SSSMarket",
    time: "Jul-2022 - Oct-2022",
    contents: [
      "Taking responsibility for conducting ideas, creating engaging and user-friendly digital interfaces for websites, mobile applications, and other interactive media", 
      "Having the privilege of shaping digital products from concept to launch, focusing on creating meaningful user experiences and driving business goals.",
      "Ideation & Prototyping: Generating innovative ideas through brainstorming sessions and sketching, translating concepts into wireframes, mockups, and interactive prototypes to visualize and validate design solutions.",
      "User-Centered Design: Championing empathy-driven design practices to understand user needs, behaviors, and pain points deeply, conducting user research, creating personas, and mapping user journeys to inform design decisions.",
      "Iterative Design: Iteratively refining designs based on user feedback, usability testing, and data analysis via Hotjar and Metabase.",
      "Prototyping & Testing: Using tools like Figma, Mirco, Whimsical, or Sketch to create prototypes for user testing and validation. Conducting usability tests and iterating designs based on insights gathered to refine the product experience.",


    ],
    skills: ["ReactJs", "Typescript", "HTML", "CSS", "Javascript"],
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
