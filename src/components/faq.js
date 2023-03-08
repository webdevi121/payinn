import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "styles/components/faq.scss"
import { useStaticQuery, graphql } from "gatsby"

const Faq = props => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        acfOptionsGlobalOptions {
          pageSlug
          pageTitle
          acfFaq {
            faqRepeater {
              answerText
              questionText
            }
          }
        }
      }
    }
  `)

  const faqItem = data.wp.acfOptionsGlobalOptions.acfFaq.faqRepeater

  return (
    <>
      {faqItem ? (
        <div className="">
          <h2 className="mb-3 text-2xl font-bold">Common Enquiries</h2>
          <Accordion>
            {data.wp.acfOptionsGlobalOptions.acfFaq.faqRepeater.map(
              (item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {item.questionText}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item.answerText}</AccordionItemPanel>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      ) : null}
    </>
  )
}

export default Faq
