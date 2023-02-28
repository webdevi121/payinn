import React from "react"
import Seo from "components/seo"
import { Link } from "gatsby"
import Layout from "components/layout"

const Homepage = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title="Building Inspection Reports"
          description="Building Inspection Report Made Easy, Best for vehicle inspection report, rental inspection checklist, house inspection checklist and inspection report template. Try it FREE!"
        />
        <div className="sir-container">
          <h1 className="mb-2 text-center text-3xl font-bold">Homepage</h1>
          <div className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            excepturi, ipsam sed ullam et repellendus doloremque quisquam
            consequatur hic possimus. Voluptas illum tenetur cum libero dicta
            enim minus delectus officia.
          </div>
        </div>

        <div class="my-20">
          <div className="sir-container">
            <div className="items-center space-y-7 text-left sm:flex sm:flex-col lg:flex-row">
              <div className="space-y-7">
                <h2 className="mb-3 text-3xl font-bold lg:text-4xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Commodi beatae sequi possimus vitae tenetur modi velit minima
                  harum soluta quis. Iure repellat quibusdam, eveniet quaerat
                  deserunt dolore qui voluptate modi!
                </p>
                <div>
                  <Link>
                    <button className="h-12 w-auto rounded-2xl bg-sir-secondary px-7 py-2 text-base font-bold text-white">
                      <div className="flex justify-center">
                        <div>Try It Free</div>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="h-50 relative pt-5">
                <div className="relative z-20 flex w-11/12 items-end justify-center sm:m-auto sm:w-8/12">
                  <img
                    src="https://via.placeholder.com/800"
                    alt="placeholder img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Homepage
