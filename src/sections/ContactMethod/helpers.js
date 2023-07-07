import { ReactComponent as Github } from "assets/contact-method/contact-github.svg";
import { ReactComponent as Gmail } from "assets/contact-method/contact-gmail.svg";
import { ReactComponent as LinkedIn } from "assets/contact-method/contact-linkedln.svg";
import { ReactComponent as Instagram } from "assets/contact-method/contact-instagram.svg";
import { ReactComponent as Behance } from "assets/contact-method/contact-behance.svg";

export const getContactIconComponent = (contactName) => {
  switch (contactName) {
    case "Github":
      return <Github />;
    case "LinkedIn":
      return <LinkedIn />;
    case "Gmail":
      return <Gmail />;
    case "Instagram":
      return <Instagram />;
    case "Behance":
      return <Behance/>;
    default:
      return null;
  }
};
