import React from "react"
import Iframe from "react-iframe"
import Layout from "components/layout"

export default function ContactUs() {
  return (
    <Layout>
      <div className="py-20">
        <div className="theme-container">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <Iframe
                src="https://admin.payinn.infusion121.com/contact-us/"
                width="100%"
                height="750"
                title="contact form"
              />
            </div>
            <div className="layout">
              <h1 className="mb-3 text-3xl font-bold">Get In Touch</h1>
              <p>
                If you are ready to start saving your business the high cost of
                accepting card payments, contact us and a Payment Processing Fee
                Specialist will contact you within 24 hours to help you start
                saving on Merchant Fees!
              </p>
              <p>
                <a href="mailto:info@payinn.com.au">info@payinn.com.au</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
