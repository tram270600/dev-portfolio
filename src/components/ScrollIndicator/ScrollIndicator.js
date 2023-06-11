import { useEffect, useState } from "react";
import "./ScrollIndicator.scss";

export default function ScrollIndicator() {
  const pageSelections = ["About", "Experience", "Works", "Skils", "Contact"];
  const pageSelectionIds = pageSelections.map(
    (pageSelection) => "#" + pageSelection
  );
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const onSectionIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentIndex = pageSelectionIds.indexOf(`#${entry.target.id}`);
          setActiveDotIndex(currentIndex);
        }
      });
    };

    const options = {
      threshold: 0.3,
    };
    const observer = new IntersectionObserver(onSectionIntersection, options);
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, [pageSelectionIds]);

  return (
    <div className="scroll-indicator">
      {pageSelectionIds.map((pageSelectionId, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={pageSelectionId}
          key={index}
          data-section={`0${(index+1)}.\u00A0${pageSelections[index]}`}
          className={`${activeDotIndex === index ? "active" : ""}`}
        ></a>
      ))}
    </div>
  );
}
