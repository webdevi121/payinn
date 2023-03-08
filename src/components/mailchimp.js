/* eslint no-console:0 no-alert:0 */
import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class IndexPage extends React.Component {
  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }

        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <div className="bg-[#fafafa] p-5">
        <h2 className="mb-3 text-xl font-bold">Subscribe to our newsletter</h2>
        <div>
          <form
            onSubmit={this._handleSubmit}
            className="grid grid-flow-col gap-3"
          >
            <input
              type="text"
              onChange={this._handleChange}
              placeholder="First Name"
              name="fname"
              className="rounded-lg border p-3"
            />
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="Your Email"
              name="email"
              className="rounded-lg border p-3"
            />
            <input
              type="submit"
              className="cursor-pointer rounded-lg bg-theme-primary p-3 px-5 text-white"
            />
          </form>
        </div>
      </div>
    )
  }
}
