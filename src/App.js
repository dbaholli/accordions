import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./data.js";
import "./AccordionStyles.css";

const App = () => {
  return (
    <div>
      <h1>React</h1>
      <div className="accordion">
        {accordionData.map(({ question, answer }) => (
          <Accordion question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default App;
