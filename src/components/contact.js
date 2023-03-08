import React, { useState } from "react"
import axios from "axios"
import Layout from "./layout"

const MyForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()

    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/c642b53a-15e5-48b3-8809-28d799fe6cce",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div>
      <div className="col-md-8 m-auto mt-5 max-w-md">
        <form onSubmit={handleOnSubmit} className="grid grid-flow-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="rounded-lg border p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="rounded-lg border p-3"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Your Message"
            className="h-[250px] rounded-lg border p-3"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-theme-primary p-3 px-5 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default MyForm
