import MyImg from "assets/my-img.jpg";
import "./Banner.css";

const IAmFeDev = () => (
  <div
    className="overflow-hidden flex items-center font-bold	text-7xl text-white"
    style={{
      width: "1200px",
      height: "200px",
    }}
  >
    <span className="mr-3.5">I am</span>
    <div className="relative">
      <div className="relative inline-block w-12">
        <span
          className="absolute left-0"
          style={{
            bottom: "-12px",
            animation: "up 4s infinite",
          }}
        >
          D
        </span>
      </div>
      <span className="inline-block w-14">
        <span style={{ animation: "horizontalMove1 4s infinite" }}>a</span>
      </span>
      <div className="relative inline-block w-12">
        <span
          className="absolute left-0"
          style={{
            bottom: "-12px",
            animation: "down 4s infinite",
          }}
        >
          t
        </span>
      </div>
      <div
        className="absolute left-20 top-0 rounded-md bg-green-500 p-5"
        style={{
          top: "calc(-50% - 20px)",
          animation: "careerFade 4s infinite",
        }}
      >
        <p>front-end developer</p>
      </div>
    </div>
  </div>
);

export default function Banner() {
  return (
    <section className="h-screen flex flex-col justify-center items-start">
      <h1 className="text-[--green] mb-7">Hi my name is</h1>
      <h2 className="text-[--lightest-slate] font-semibold text-7xl mb-2">
        Dat Nguyen
      </h2>
      <h2 className="text-[--slate] font-semibold text-7xl mb-6	">
        I build things for the web.
      </h2>
      <p className="text-[--slate]">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
    </section>
  );
}
