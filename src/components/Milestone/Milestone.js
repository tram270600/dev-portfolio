import "./Milestone.scss";
import classNames from "classnames";
export default function Milestone({ active }) {
  console.log("active", active);
  return (
    <div
      className={classNames(active === true ? "active-cursor" : "cursor")}
    ></div>
  );
}
