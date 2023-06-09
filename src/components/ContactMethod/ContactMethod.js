import "./ContactMethod.scss";
import { ReactComponent as Github } from "../../assets/contact-method/contact-github.svg";
import { ReactComponent as Gmail } from "../../assets/contact-method/contact-gmail.svg";
import { ReactComponent as LinkedIn } from "../../assets/contact-method/contact-linkedln.svg";
import { ReactComponent as Instagram } from "../../assets/contact-method/contact-instagram.svg";

export default function ContactMethod() {
  const contactNames = ["Github", "LinkedIn", "Gmail", "Instagram"];
  const contactLink = [
    "https://github.com/bchiang7",
    "LinkedIn",
    "Gmail",
    "Instagram",
  ];
  const getContactIconComponent = (contactName) => {
    switch (contactName) {
      case "Github":
        return <Github></Github>;
      case "LinkedIn":
        return <LinkedIn></LinkedIn>;
      case "Gmail":
        return <Gmail></Gmail>;
      case "Instagram":
        return <Instagram></Instagram>;
      default:
        return null;
    }
  };
  return (
    <>
      <ul className="contact-method__boundary">
        {contactNames.map((contactName, index) => (
          <li className="contact-method__component">
            <a
              href={contactLink[index]}
              key={index}
              data-section={contactName}
              target="_blank"
              rel="noreferrer"
            >
              {getContactIconComponent(contactName)}
            </a>
          </li>
        ))}
        <div class="vertical-line"></div>
      </ul>
    </>
  );
}
