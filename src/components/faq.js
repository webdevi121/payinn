import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const Faq = props => {
  return (
    <React.Fragment>
      <div className="bg-theme-secondary py-20 text-white">
        <div className="theme-container relative">
          <h2 className="mb-5 text-4xl font-bold">Common Enquiries</h2>
          <Accordion allowZeroExpanded className="grid grid-cols-2 gap-3">
            {props.list.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {item.questionField}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div dangerouslySetInnerHTML={{ __html: item.answerField }} />
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Faq
