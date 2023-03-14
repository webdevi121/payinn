import React from "react"

const CustomerJourney = props => {
  return (
    <React.Fragment>
      <div className="relative min-h-[50vh] bg-theme-secondary py-20">
        <div className="absolute top-0 left-0 h-full w-full">
          <img
            src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/bg-matrix.jpg"
            alt=""
            className="h-full w-full object-cover object-bottom opacity-10"
          />
        </div>
        <div className="theme-container relative">
          <h2 className="mb-20 text-center text-4xl font-bold text-theme-primary">
            {props.title}
          </h2>
          <div>
            <div className="journey-container">
              <div className="jc-scroll-box">
                <div className="jc-wrap">
                  {props.list?.map((item, index) => (
                    <div className="journey-item" key={index}>
                      <div
                        className="roadmap-content"
                        style={{ color: `var(--accent-color-${index})` }}
                      >
                        <span
                          className="dot relative"
                          style={{ color: `var(--accent-color-${index})` }}
                        >
                          <span className="dot-title">
                            <h4 className="font-bold">{item.stageTitle}</h4>
                          </span>
                        </span>

                        <div className="content">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.stageDescription,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CustomerJourney
