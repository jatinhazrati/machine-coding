import React from "react";

const AccordionItem = ({
  id,
  children,
  collapsible,
  activeAccordionItem,
  handleAccordionItemClick,
}) => {
  return (
    <div className="accordion-item">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          id,
          collapsible,
          activeAccordionItem,
          handleAccordionItemClick,
        });
      })}
    </div>
  );
};

export default AccordionItem;
