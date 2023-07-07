import SayHello from "sections/SayHello/SayHello";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="h-screen flex flex-col justify-center items-start">
      <SayHello />
      <h2 className="text-[--lightest-slate] lg:text-xl mb-7">Nice to meet you, It&apos;s</h2>
      <h1 className="text-[--green] font-semibold text-4xl lg:text-7xl mb-2">
        Tram Nguyen
      </h1>
      <h2 className="text-[--light-slate] font-semibold text-4xl lg:text-7xl mb-6	">
        I&apos;m a Front-end developer.
      </h2>
      <p className="text-[--slate]">
        I&apos;m a front-end developer based in Ho Chi Minh City, Vietnam. I
        have a passion for building things by code.
      </p>
    </div>
  );
}
