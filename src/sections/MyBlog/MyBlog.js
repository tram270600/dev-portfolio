import FlipCard from "components/FlipCard/FlipCard";
import "./MyBlog.scss";

export default function MyBlog() {
  const awardBlogList = [
    {
      title: "MERIT OF '5 GOOD STUDENTS'",
      subTitle:
        "National University, Vietnam National University - Ho Chi Minh City",
      subTitle2: "2020-2021 and 2019-2020",
      description:
        "The title for students who excel in many aspects, including academic work, physical health, social integration, moral character and volunteering - an activity organized by the Student Union to honor efforts and achievements during the school year",
      image: "SV5T",
    },
    {
      title: "Shecode",
      subTitle:
        "National University, Vietnam National University - Ho Chi Minh City",
      subTitle2: "Year 2020",
      description: "",
      image: "shecodes",
    },
    {
      title: "Certificate of Advanced youth follow Uncle Ho's grant school",
      subTitle:
        "National University, Vietnam National University - Ho Chi Minh City",
      subTitle2: "Year 2020",
      description: "",
      image: "IU",
    },
    {
      title: "TOEIC 2022",
      subTitle:
        "TOEIC: 830, TOEIC SW 270",
      subTitle2: "Year 2020",
      description: "",
      image: "TOEIC",
    },
    {
      title: "Certificate of Advanced youth follow Uncle Ho's grant school",
      subTitle:
        "National University, Vietnam National University - Ho Chi Minh City",
      subTitle2: "Year 2020",
      description: "",
      image: "Cambridge",
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-center items-start w-full">
      <h2 className="titleSection">Honor & Awards</h2>
      <div className="grid gap-4 w-full gridTemplate">
        {awardBlogList.map((award, index) => (
          <FlipCard key={index} content={award}></FlipCard>
        ))}
      </div>
    </div>
  );
}
