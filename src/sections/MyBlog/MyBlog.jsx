import FlipCard from "components/FlipCard/FlipCard";
import { DescriptionItem } from "sections/Education/Education";
import "./MyBlog.scss";

export default function MyBlog() {
  const awardBlogList = [
    {
      title: "MERIT OF '5 GOOD STUDENTS'",
      subTitle:
        "National University, Vietnam National University - Ho Chi Minh City",
      subTitle2: "2020-2021 and 2019-2020",
      description: <>
        <p>An activity organized by the Student Union to honor efforts and achievements during the school year.</p>
        <p>This title recognizes students who excel in various aspects.</p>
        <DescriptionItem content={"Academic work"} />
        <DescriptionItem content={"Physical health"} />
        <DescriptionItem content={"Social integration"} />
        <DescriptionItem content={"Moral character"} />
        <DescriptionItem content={"Volunteering"} />
      </>
      ,
      image: "SV5T",
    },
    {
      title: "Shecode Hackathon",
      subTitle: "Participate in Shecode Hackathon Vietnam in diverse capacities. Initially joining as a contestant, after three years, returned as a Mentor and Speaker.",
      description: <>
        <DescriptionItem content={
          <div>
            <b>Mentor </b>
            <span><i> • Oct 2023</i></span>
            <p>Shecode Hackathon - HCM City</p>
          </div>} />
        <DescriptionItem content={
          <div>
            <b>Guest Speaker </b>
            <span><i> • Sep 2023</i></span>
            <p>Host a Webinar on How to survive in a Hackathon</p>
          </div>} />
        <DescriptionItem content={
          <div>
            <b>Contestants </b>
            <span><i> • July 2020</i></span>
            <p>Shecode Hackathon - HCM City</p>
            <p>Top 6 with an AI application product named E-closet.</p>
          </div>} />
      </>,
      image: "shecodes",
    },
    {
      title: "TOEIC 2022",
      subTitle: <>
        <div>
          <span className="text-[--green] text-xl">-</span><b> TOEIC: 830</b>
          <p>Listening: 435/495</p>
          <p>Reading: 395/495</p>
          <span className="text-[--green] text-xl">-</span><b> TOEIC SW: 270</b>
          <p>Speaking: 130/200</p>
          <p>Writing: 150/200</p>
        </div>
      </>,
      description:
        <>
          <DescriptionItem content={
            <div>TOEIC Test Date:
              <b>2022/08/18</b>
            </div>} />
          <DescriptionItem content={
            <div>TOEIC SW Test Date:
              <b>2022/08/24</b>
            </div>} />
          <p className="mt-2">The Test of English for International Communication is an international standardized test of English language proficiency for non-native speakers.</p>
        </>
      ,
      image: "TOEIC",
    }
    // ,{
    //   title: "Certificate of Advanced youth follow Uncle Ho's grant school",
    //   subTitle:
    //     "National University, Vietnam National University - Ho Chi Minh City",
    //   subTitle2: "Year 2020",
    //   description: "",
    //   image: "IU",
    // },
    // {
    //   title: "Certificate of Advanced youth follow Uncle Ho's grant school",
    //   subTitle:
    //     "National University, Vietnam National University - Ho Chi Minh City",
    //   subTitle2: "Year 2020",
    //   description: "",
    //   image: "Cambridge",
    // },
  ];
  return (
    <div className="h-screen flex flex-col justify-center items-start w-full">
      <h2 className="titleSection">Honor & Awards</h2>
      <div className="blog-content grid gap-4 w-full gridTemplate overflow-x-scroll md:overflow-visible">
        {awardBlogList.map((award, index) => (
          <FlipCard key={index} content={award}></FlipCard>
        ))}
      </div>
    </div>
  );
}
