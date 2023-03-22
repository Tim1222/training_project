import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";
import React from "react";

type AccordionPropsType = {
    titleValue: string,
}


function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </div>
}

export default Accordion;