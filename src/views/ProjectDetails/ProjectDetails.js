import Pdf from '../../assets/documents/Finnta.pdf';
import Video from '../../assets/documents/Finnta-Video-record.mp4';
import { Skill, Keyword } from 'sections/Works/Works';
import { getContactIconComponent } from 'sections/ContactMethod/helpers';
import "./ProjectDetails.scss"
import { useRef } from "react";
import GlowingMouse from "components/GlowingMouse/GlowingMouse";

function ProjectDetails() {
  const videoElementRef = useRef(null);
  function setCurTime(initalTime) {
    videoElementRef.current.currentTime = initalTime;
  }
  const project =
  {
    title: "Fashion Recommendation Platform",
    keywords: ["Web Dev", "AI", "Machine Learning", "UI/UX"],
    description: ["A web application designed to offer outfit combinations, style inspiration, and seamless shopping experiences to fashion enthusiasts on-the-go.", "FinnTA - Fashion Recommendation Platform is a web application designed to offer outfit combinations, style inspiration, and seamless shopping experiences to fashion enthusiasts on-the-go. With AI-powered recommendations applied to Frequent itemset mining, a virtual wardrobe empowers users to effortlessly mix and match, and create stylish and cohesive outfits that suit their personal style preferences and lifestyle needs.", "The thesis idea was implemented form on ReactJS, Three, Drei, JSON Server, and some other JavaScript libraries. The project utilized the knowledge gained from the Web Application Development course to apply basic web design, MVC architecture, and essential skills in designing and developing web-based applications. By utilizing critical and analytic thinking during the planning, execution, and evaluation phases of the software development process, FinnTA was created."],
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
  }
    ;
  return (
    <>
      <GlowingMouse />
      <div className="container px-6 md:px-20 lg:px-[200px] 2xl:px-[350px] text-[--slate] mx-auto scroller">
        <div className='my-24'>
          <div className='project-content'>
            <a
              href={"/#Works"}
              rel="noreferrer" className="flex gap-2">
              <div className="back__icon">
                {getContactIconComponent("Readmore")}
              </div>
              <p className="back__text">Back</p>
            </a>
          </div>
          <div className='project-content'>
            <div className="divide-x divide-slate-400">
              {project.keywords.map((keyword, id) => (
                <Keyword key={keyword} keyword={keyword} id={id} />
              ))}
            </div>
            <div className={"project-title"}>{project.title}</div>
            <div className="text-xl font-semibold mb-7">{project.year}</div>
            <div className="flex gap-2 flex-wrap mt-5">
              {project.techList.map((tech) => (
                <Skill key={tech} skill={tech} />
              ))}
            </div>
            <div className='mt-5'>
              {project.description.map((d, id) =>
                <p key={id} className="mt-4">{d}</p>
              )}
            </div>
            <div className="flex gap-6 mt-4">
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
          <video width="100%" controls playsInline autoPlay muted ref={videoElementRef} >
            <source src={Video} type="video/mp4" />
          </video>
          <div className="text-xl font-semibold mt-8">In this video</div>
          <div className='flex flex-col items-start my-8 divide-y divide-[--dark-slate]'>
            <button className='py-3 w-full text-start hover:text-[--green]' onClick={() => setCurTime(20)}>00:20 - Homepage screen: Product List and Collection </button>
            <button className='py-3 w-full text-start hover:text-[--green]' onClick={() => setCurTime(50)}>00:50 - Upload clothing item </button>
            <button className='py-3 w-full text-start hover:text-[--green]' onClick={() => setCurTime(147)}>02:27 - Create an outfit with AI Recommendation by Frequent item set </button>
            <button className='py-3 w-full text-start hover:text-[--green]' onClick={() => setCurTime(234)}>03:54 - View product in 3D by Three and Drei </button>
            <button className='py-3 w-full text-start hover:text-[--green]' onClick={() => setCurTime(86)}>01:26 - Create an outfit by mix and match: save to collection </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
