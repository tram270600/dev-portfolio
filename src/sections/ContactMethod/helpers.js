import { ReactComponent as Github } from "assets/contact-method/contact-github.svg";
import { ReactComponent as Gmail } from "assets/contact-method/contact-gmail.svg";
import { ReactComponent as LinkedIn } from "assets/contact-method/contact-linkedln.svg";
import { ReactComponent as Instagram } from "assets/contact-method/contact-instagram.svg";
import { ReactComponent as Behance } from "assets/contact-method/contact-behance.svg";
import { ReactComponent as Readmore } from "assets/contact-method/contact-readmore.svg";
import { ReactComponent as Documents } from "assets/documents/documents.svg";

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
      return <Behance />;
    case "Readmore":
      return <Readmore />;
    case "Documents":
      return <Documents />;
    default:
      return null;
  }
};
