import React from "react"
import ContactForm from "../components/contact-form"
import { Helmet } from "react-helmet"

export default () => <div>
  <Helmet>
    <title>Contact - Thanos Paravantis</title>
  </Helmet>
  <div className="max-w-2xl mx-auto my-24 px-5 md:pl-20 md:my-12">
    <h1 className="font-bold text-xl mb-2 text-gray-900">
      Contact
    </h1>
    <div className="mb-5 leading-relaxed text-gray-800">
      <p className="mb-3">For business inquiries, you can send me a personalized message using this form. I will get back to you in detail as soon as I can.</p>
      <p>Alternative, if you wish to send me an e-mail right away, you can reach me at <a href="mailto:thanosparavantis@gmail.com" className="underline">thanosparavantis@gmail.com</a>.</p>
    </div>
    <ContactForm/>
  </div>
</div>
