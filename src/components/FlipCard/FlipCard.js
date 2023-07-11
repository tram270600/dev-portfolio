import "./FlipCard.scss";
import shecodes from "assets/award-organizer/shecode-logo.png";
import IU from "assets/award-organizer/IU-logo.png";
import SV5T from "assets/award-organizer/sv5t-logo.png";
import TOEIC from "assets/award-organizer/toeic-logo.png";
import Cambridge from "assets/award-organizer/cambridge-logo.png";
export default function FlipCard({ content }) {
  const { title, subTitle, subTitle2, description, image } = content;
  const getImagePath = (path) => {
    switch (path) {
      case "shecodes":
        return (
          <img width={50} height={50} src={shecodes} className="logo-organizer"/>
        );
      case "IU":
        return (
          <img width={50} height={50} src={IU} className="logo-organizer" />
        );
      case "SV5T":
        return (
          <img width={50} height={50} src={SV5T} className="logo-organizer" />
        );
      case "TOEIC":
        return (
          <img width={50} height={50} style={{margin: '20px'}} src={TOEIC} className="logo-contrast" />
        );
      case "Cambridge":
        return (
          <img width={150} height={150} src={Cambridge} className="logo-contrast" />
        );
      default:
        return <></>
    }
  };
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {getImagePath(image)}
          <div className="flip-card__title pb-5 px-5">{title}</div>
          <p className="px-5">{subTitle}</p>
          <p className="px-5">{subTitle2}</p>
        </div>
        <div className="flip-card-back">
          <p className="p-5">{description}</p>
        </div>
      </div>
    </div>
  );
}
