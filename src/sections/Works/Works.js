import FashionRecommendationCover from "assets/img/projectCover/FinnTA.png";
import "./Works.scss";
import "../ContactMethod/ContactMethod.scss";
import classNames from "classnames";
import { getContactIconComponent } from "../ContactMethod/helpers";
import Pdf from '../../assets/documents/Finnta.pdf';

export default function Works() {
  const Keyword = ({ keyword, id }) => (
    <span
      className={classNames(
        "text-slate-400 hover:text-teal-300 cursor-pointer py-1",
        id === 0 ? "pr-3" : "px-3"
      )}
    >
      {keyword}
    </span>
  );
  const Skill = ({ skill }) => (
    <span className="rounded-full bg-teal-400/25 px-3 py-1 text-[--lightest-slate] hover:text-teal-300 cursor-pointer">
      {skill}
    </span>
  );
  const projects = [
    {
      title: "Fashion Recommendation Platform",
      keywords: ["Web Dev", "AI", "Machine Learning", "UI/UX"],
      description:
        "A web application designed to offer outfit combinations, style inspiration, and seamless shopping experiences to fashion enthusiasts on-the-go.",
      year: 2022,
      techList: ["JavaScript", "ReactJS", "Three", "Drei", "JSON Server"],
      links: [
        {
          type: "Documents",
          url: Pdf,
        },
        {
          type: "Github",
          url: "https://github.com/tram270600/FinnTA-Recommendation-System",
        },
      ],
      image: "",
    },
  ];
  return (
    <>
      <h2 className="titleSection">Project I have Built</h2>
      {projects.map((project, id) => (
        <a
          href={"/details"}
          target="_blank"
          rel="noreferrer"
          className={classNames(
            "project-content",
            "hover:bg-[--green-shadow] whitespace-nowrap",
            "border-t-[--lightest-navy]",
            "gap-2 md:grid grid-cols-2"
          )}
          key={id}
        >
          <div>
            <div className="divide-x divide-slate-400">
              {project.keywords.map((keyword, id) => (
                <Keyword key={keyword} keyword={keyword} id={id} />
              ))}
            </div>
            <div className={"project-title"}>{project.title}</div>
            <div className="text-xl font-semibold mb-7">{project.year}</div>
            <p className="project-description">{project.description}</p>
            <div className="flex gap-2 flex-wrap mt-5 w-4/5">
              {project.techList.map((tech) => (
                <Skill key={tech} skill={tech} />
              ))}
            </div>
          </div>
          <div>
            <div className="project-image">
              <img src={FashionRecommendationCover} width={1050} />
            </div>
            <div className="flex flex-row-reverse gap-6 mt-4">
              <a
                href={"/details"}
                target="_blank"
                rel="noreferrer" className="flex gap-2">
                <p className="read-more__text">Read more</p>
                <div className="read-more__icon">
                  {getContactIconComponent("Readmore")}
                </div>
              </a>
              {project.links.map((link, index) => (
                <div className="contact-method__component" key={index}>
                  <a
                    href={link.url}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getContactIconComponent(link.type)}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
