const AccordionToggle = ({
  id,
  children,
  collapsible,
  activeAccordionItem,
  handleAccordionItemClick,
}) => {
  return (
    <div
      className="accordion-toggle"
      onClick={() =>
        collapsible && activeAccordionItem === id
          ? handleAccordionItemClick(null)
          : handleAccordionItemClick(id)
      }
    >
      {children}
    </div>
  );
};

export default AccordionToggle;
