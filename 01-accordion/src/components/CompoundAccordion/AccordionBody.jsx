const AccordionBody = ({ id, activeAccordionItem, children }) => {
  return (
    <>
      {activeAccordionItem === id && (
        <div className="accordion-body">{children}</div>
      )}
    </>
  );
};

export default AccordionBody;
