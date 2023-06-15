import blog1Bg from "assets/blog1_bg.webp";

export default function MyBlog() {
  return (
    <div className="h-screen flex flex-col justify-start items-start pt-24">
      <h2 className="titleSection">Pieces I've written</h2>
      <div className="w-full bg-[--light-navy] p-6 rounded-md">
        <div
          className="bg-cover h-[300px] mb-4"
          style={{
            backgroundImage: `url(${blog1Bg})`,
          }}
        />
        <h3 className="text-[--green]">
          Build a color picker Chrome extension in 10 minutes
        </h3>
        <p className="">
          A simple tutorial on how to create a color picker Chrome's extension
        </p>
        <span className="text-xs">
          *note: You have to fake vpn in order to access Medium
        </span>
      </div>
    </div>
  );
}
