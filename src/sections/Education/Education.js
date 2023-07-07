import classNames from "classnames";
import { useCallback, useState } from "react";
import "./Education.scss";
import Milestone from "components/Milestone/Milestone";

const EXPERIENCE_SECTION = {
  GOT_IT: "got-it",
  SHOPEE: "shopee",
  JH: "jh",
};

const experienceData = [
  {
    title: "International University",
    id: EXPERIENCE_SECTION.GOT_IT,
    range: "2018-2022",
    companyName: "University",
    time: "Sep 2018 - Nov 2022",
    data: [
      "Bachelor's degree in Computer Science and Engineering",
      "GPA: 79.9",
      "MERIT OF '5 GOOD STUDENTS' in 2020 and 2021",
      "Certificate of Advanced Youth follow Uncle Ho grant school",
      "Leader of the Public Relations Team of the CSE Faculty in the year 2019 - 2020",
    ],
  },
  {
    title: "Nguyen Thi Minh Khai",
    id: EXPERIENCE_SECTION.SHOPEE,
    range: "2015 - 2018",
    companyName: "High School",
    time: "Jul-2022 - Oct-2022",
    data: [
      "Graduated with the title of excellent student with the acheivement of three years in High school",
      "Winning good student for 12 consecutive years.",
    ],
  },
  {
    title: "Colette",
    id: EXPERIENCE_SECTION.JH,
    range: "2011 - 2015",
    companyName: "Secondary School",
    time: "Oct-2020 - Jun-2022",
    data: ["Winning good student for 9 consecutive years."],
  },
];

const DescriptionItem = ({ content }) => (
  <div className="flex">
    <span className="text-[--green] text-xl">-</span>
    <p className="ml-2">{content}</p>
  </div>
);

export default function Education() {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

  const handleSelectCompany = useCallback(
    (index) => setSelectedCompanyIndex(index),
    []
  );

  return (
    <>
      <h2 className="titleSection">Education</h2>
      <div className="flex flex-col gap-4 px-0 md:px-8 max-w-full">
        <div
          id="educationList"
          className="educationList flex justify-between pr-5 max-w-full overflow-x-scroll md:overflow-visible"
        >
          {experienceData.map((experience, index) => (
            <div className="milestone-box w-full" key={experience.companyName}>
              <Milestone
                active={selectedCompanyIndex === index ? true : false}
              />
              <button
                className={classNames(
                  "h-20 hover text-center w-full mb-1 px-5 py-4 border-t md:text-left hover:bg-[--green-shadow] whitespace-nowrap",
                  "border-t-[--lightest-navy]",
                  selectedCompanyIndex === index ? "text-[--green]" : ""
                )}
                onClick={() => handleSelectCompany(index)}
              >
                <div className="text-[--lightest-slate] text-sm">{experience.range}</div>
                {experience.companyName}
              </button>
            </div>
          ))}
        </div>
        <div className="pt-2">
          <p className="text-[--green] text-2xl font-semibold">
            {experienceData[selectedCompanyIndex].title}
          </p>
          <p className="mb-5">{experienceData[selectedCompanyIndex].time}</p>
          {experienceData[selectedCompanyIndex].data.map((data, index) => (
            <DescriptionItem key={index} content={data} />
          ))}
        </div>
      </div>
    </>
  );
}
