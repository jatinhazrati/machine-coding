import React, { useState } from "react";
import "../../accordion.css";

const Accordion = ({ defaultActiveKey, children, collapsible }) => {
  const [activeAccordionItem, setActiveAccordionItem] =
    useState(defaultActiveKey);

  return (
    <div className="accordion-container">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          collapsible,
          activeAccordionItem,
          handleAccordionItemClick: setActiveAccordionItem,
        });
      })}
    </div>
  );
};

export default Accordion;
