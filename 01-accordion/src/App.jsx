import { accordionData } from "./accordionData";
// import Accordion from "./components/CompoundAccordion/Accordion";
// import AccordionBody from "./components/CompoundAccordion/AccordionBody";
// import AccordionToggle from "./components/CompoundAccordion/AccordionToggle";
// import AccordionItem from "./components/CompoundAccordion/AccordionItem";
import Accordion from "./components/AtomicAccordion/Accordion";

function App() {
  return (
    <div className="app">
      {/* <Accordion collapsible={true}>
        {accordionData.map((item, index) => {
          return (
            <AccordionItem key={index} id={index}>
              <AccordionToggle>{item.header}</AccordionToggle>
              <AccordionBody>{item.body}</AccordionBody>
            </AccordionItem>
          );
        })}
      </Accordion> */}
      <Accordion />
    </div>
  );
}

export default App;
