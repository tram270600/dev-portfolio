import "./ScrollIndicator.css";

export default function ScrollIndicator() {
  const pageSelectionIds = ["#a", "#b", "#c", "#d"];
  return (
    <div className="scroll-indicator">
      {pageSelectionIds.map((pageSelectionId) => (
        <a href={pageSelectionId} data-section={pageSelectionId}></a>
      ))}
    </div>
  );
}
