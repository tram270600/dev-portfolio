export default function MyBlog() {
  return (
    <div className="h-screen flex flex-col justify-start items-start pt-24">
      <h2 className="titleSection">Pieces I've written</h2>
      <div>
        <h3 className="text-[--green]">
          Build a color picker Chrome extension in 10 minutes
        </h3>
        <p className="p-6 bg-[--light-navy]">
          A simple tutorial on how to create a color picker Chrome's extension
        </p>
        <span className="text-xs">
          *note: You have to fake vpn in order to access Medium
        </span>
      </div>
    </div>
  );
}
