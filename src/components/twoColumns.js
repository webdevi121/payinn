import React from "react"
const TwoColumns = props => {
  return (
    <React.Fragment>
      <div className="min-h-[50vh] overflow-x-clip bg-theme-light py-20">
        <div className="theme-container relative">
          <div className="absolute -top-16 right-0 h-[45rem] w-[35rem] bg-theme-primary opacity-20 blur-[120px]"></div>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            <span className="after:flex after:w-[40px] after:border-[2px] after:border-b after:border-theme-primary">
              {props.title}
            </span>
          </h2>
          <div className="grid gap-10 xl:grid-flow-col xl:gap-20">
            <div
              className="layout"
              dangerouslySetInnerHTML={{
                __html: props.contentLeft,
              }}
            />
            <div
              className="layout"
              dangerouslySetInnerHTML={{
                __html: props.contentRight,
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TwoColumns
