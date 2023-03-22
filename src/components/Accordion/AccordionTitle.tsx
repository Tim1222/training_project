import React from "react";

type AccordionTitle = {
    title: string
}
function AccordionTitle(props: AccordionTitle) {
    // console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

export default AccordionTitle;