// import { accordionData } from "./accordionData";
// import Accordion, {
//   AccordionBody,
//   AccordionItem,
//   AccordionToggle,
// } from "./components/CompoundAccordion/Accordion";
import Accordion from "./components/AtomicAccordion/Accordion";

function App() {
  return (
    <div className="app">
      {/* <Accordion collapsible={true}>
        {accordionData.map((item, index) => {
          return (
            <AccordionItem id={index}>
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
