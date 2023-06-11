import "./ContactMethod.scss";
import { ReactComponent as Github } from "../../assets/contact-method/contact-github.svg";
import { ReactComponent as Gmail } from "../../assets/contact-method/contact-gmail.svg";
import { ReactComponent as LinkedIn } from "../../assets/contact-method/contact-linkedln.svg";
import { ReactComponent as Instagram } from "../../assets/contact-method/contact-instagram.svg";

export default function ContactMethod() {
  const contactNames = ["Github", "LinkedIn", "Gmail", "Instagram"];
  const contactLink = [
    "https://github.com/NguyenDat251",
    "https://www.linkedin.com/in/%C4%91%E1%BA%A1t-nguy%E1%BB%85n-a77ba518a/",
    "nguyenquocdat2511998@gmail.com ",
    "https://www.instagram.com/no_quo_do/",
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
            {contactName === "Gmail" ? (
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nguyenquocdat2511998@gmail.com "
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                {getContactIconComponent(contactName)}
              </a>
            ) : (
              <a
                href={contactLink[index]}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                {getContactIconComponent(contactName)}
              </a>
            )}
          </li>
        ))}
        <div class="vertical-line"></div>
      </ul>
    </>
  );
}
