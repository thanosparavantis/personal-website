import React from "react"
import ContactForm from "../components/contact-form"
import { Helmet } from "react-helmet"

export default () => <div>
  <Helmet>
    <title>Contact - Thanos Paravantis</title>
  </Helmet>
  <div className="max-w-2xl mx-auto my-24 px-5 md:pl-20 md:my-12">
    <h1 className="font-bold text-xl mb-2">
      Contact
    </h1>
    <div className="mb-5 leading-relaxed text-gray-800">
      <p className="mb-3">You can send me a personalized message and I will get back to you via e-mail as soon as I can.</p>
      <p>Alternatively, feel free to send an e-mail at <a href="mailto:thanosparavantis@gmail.com" className="underline text-orange-600 hover:text-orange-700">thanosparavantis@gmail.com</a>.</p>
    </div>
    <ContactForm/>
  </div>
</div>
