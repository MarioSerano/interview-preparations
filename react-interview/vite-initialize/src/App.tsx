import "./App.css";
import type { AccordionItemProps } from "./components/Accordion";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div>
      <h1>{"Accordions"}</h1>
      <Accordion items={ACCORDION_CONTENTS} />
    </div>
  );
}

const ACCORDION_CONTENTS: AccordionItemProps[] = [
  {
    title: "Title 1",
    content: <p>{"Content 1"}</p>,
  },
  {
    title: "Title 2",
    content: <p>{"Content 2"}</p>,
  },
  {
    title: "Title 3",
    content: <p>{"Content 3"}</p>,
  },
];

export default App;
