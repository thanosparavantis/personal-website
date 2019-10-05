import React from "react"
import ContactForm from "../components/contact-form";

export default () => <div>
  <div className="max-w-md mx-auto mt-24 mb-5 px-5 md:mt-10 lg:max-w-lg">
    <h1 className="font-bold text-xl mb-2">
      Contact
    </h1>
    <p className="mb-5 leading-relaxed text-gray-800">
      You can send me a message using this form, and I will get back to you via e-mail.
    </p>
    <ContactForm />
  </div>
</div>
