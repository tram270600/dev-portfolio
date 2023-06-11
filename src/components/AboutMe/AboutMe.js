import MyImg from "assets/my-img.jpg";

export default function AboutMe() {
  return (
    <div className="h-screen flex flex-col justify-start items-start pt-24">
      <h2 className="titleSection">About me</h2>
      <div className="flex gap-12">
        <div className="flex flex-col gap-2.5">
          <p>
            Hello! My name is Dat. I was born in 1998 in Nha Trang City, a
            stunning beach. I studied and graduated with a software engineering
            major in Ho Chi Minh City University of Science in 2020.
          </p>
          <p>
            I have three years of experience in front-end development. I am
            confident that I have deep knowledge of necessary languages ​​and
            technologies for Front-end.
          </p>
          <p>
            I'm willing to learn new things, and not afraid of complex tasks. I
            always try to read and stay up to date with the latest technology
            news.
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute border-4 rounded-sm border-[--green] top-4 left-4"
            style={{
              minWidth: "210px",
              height: "300px",
            }}
          ></div>
          <div
            className="relative bg-center bg-cover rounded-sm"
            style={{
              minWidth: "210px",
              height: "300px",
              backgroundImage: `url(${MyImg})`,
            }}
          ></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
