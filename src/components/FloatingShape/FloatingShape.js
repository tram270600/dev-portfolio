import Flower from "assets/floatingShape/yellowFlower.svg";
import Leaf from "assets/floatingShape/greenLeaf.svg";
import Butterfly from "assets/floatingShape/purpleButterfly.svg";
import "./FloatingShape.scss";
export default function FloatingShape({ shape }) {
  if (shape === "circle") {
    return (
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  }
  if (shape === "leaf") {
    return (
      <div>
        <img src={Leaf} className="floating-shape lower-shape" />
      </div>
    );
  }
  if (shape === "flower") {
    return (
      <div>
        <img src={Flower} className="floating-shape" />
      </div>
    );
  }
  return (
    <div>
      <img src={Butterfly} className="floating-shape lower-shape" />
    </div>
  );
}
