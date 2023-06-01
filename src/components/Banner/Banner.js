import MyImg from "assets/my-img.jpg";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="container relative mx-auto">
      <div className="w-full px-4 ml-auto mr-auto text-center">
        <div className="flex items-center	justify-around px-28">
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
                <span style={{ animation: "horizontalMove1 4s infinite" }}>
                  a
                </span>
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

          <div className="relative">
            <div
              className="absolute border-4 rounded-sm border-green-500 top-4 left-4"
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
          </div>
        </div>
      </div>
    </div>
  );
}
