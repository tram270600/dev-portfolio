import { contactNames, contactLink } from "./constants";
import { getContactIconComponent } from "./helpers";

export default function ContactMethodFooter() {
  return (
    <div className="absolute bottom-0 flex justify-around p-6 md:hidden w-full">
      {contactNames.map((contactName, index) => (
        <div className="contact-method__component" key={contactName}>
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
        </div>
      ))}
    </div>
  );
}
