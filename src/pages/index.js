import React from "react"
import Seo from "components/seo"
import Layout from "components/layout"
import WhatWeOffer from "../components/whatweoffer"
import BannerSection from "../components/bannerSection"

const Homepage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title="Building Inspection Reports"
          description="Building Inspection Report Made Easy, Best for vehicle inspection report, rental inspection checklist, house inspection checklist and inspection report template. Try it FREE!"
        />
        <BannerSection />
        <WhatWeOffer />
      </Layout>
    </React.Fragment>
  )
}

export default Homepage
