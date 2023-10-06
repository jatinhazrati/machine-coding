import React, { useState } from "react";
import "../../accordion.css";

export const AccordionToggle = ({
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

export const AccordionBody = ({ id, activeAccordionItem, children }) => {
  return (
    <>
      {activeAccordionItem === id && (
        <div className="accordion-body">{children}</div>
      )}
    </>
  );
};

export const AccordionItem = ({
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
