import React, { useState } from "react";
import { accordionData } from "../../accordionData";
import "../../accordion.css";

const Accordion = ({ defaultActiveKey, collapsible = true }) => {
  const [activeAccordionItem, setActiveAccordionItem] =
    useState(defaultActiveKey);

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <>
          <div className="accordion-item" key={index}>
            <div
              className="accordion-toggle"
              onClick={() =>
                collapsible && activeAccordionItem === index
                  ? setActiveAccordionItem(null)
                  : setActiveAccordionItem(index)
              }
            >
              <div className="accordion-toggle-header">{item.header}</div>
              <div className="accordion-toggle-icon">
                {activeAccordionItem === index ? "-" : "+"}
              </div>
            </div>
            {activeAccordionItem === index && (
              <div className="accordion-body">
                {accordionData[activeAccordionItem].body}
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default Accordion;
