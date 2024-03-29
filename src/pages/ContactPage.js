import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import {useCallback, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpenText, faSpinner, faUserFriends} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import TextareaAutosize from "react-textarea-autosize";
import {faFacebook, faGithub, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import PageHeader from "../components/PageHeader";
import PageTemplate from "../components/PageTemplate";
import ExternalLink from "../components/ExternalLink";

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const handleFullNameChange = useCallback((event) => {
    setFullName(event.target.value)
  }, [])

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  const handleMessageChange = useCallback((event) => {
    setMessage(event.target.value)
  }, [])

  const resetFields = useCallback(() => {
    setFullName("")
    setEmail("")
    setMessage("")
  }, [])

  const resetStatus = useCallback(() => {
    setSuccess(false)
    setError(false)
  }, [])

  const encode = useCallback((data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }, [])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    resetStatus()
    setLoading(true)

    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({
        "form-name": "contact",
        "full-name": fullName,
        "email": email,
        "message": message
      })
    }).then(response => {
      if (response.ok) {
        setSuccess(true)
        resetFields()
      } else {
        setError(true)
      }
    }).catch(error => {
      console.error(error)
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }, [resetStatus, resetFields, encode, fullName, email, message])

  return (
    <PageTemplate>
      <MetaTags
        title="Contact"
        description="For business inquiries or any other matters, feel free to send me an email or fill out the contact form."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <PageHeader title="Contact" description="For business inquiries or any other matters, feel free to send me an email or fill out the contact form."/>
      <main>
        <section className="mb-5 bg-white border rounded">
          <h2 className="px-5 md:px-8 py-5 text-lg font-bold border-b">
            <FontAwesomeIcon icon={faUserFriends} className="mr-3"/>
            Get in touch
          </h2>
          <address className="px-5 md:px-8 py-5 not-italic">
            <h3 className="mb-1 font-bold text-gray-900">
              Email address
            </h3>
            <p className="text-gray-600 mb-5">
              <ExternalLink href="mailto:thanos@paravantis.org">
                thanos@paravantis.org
              </ExternalLink>
            </p>
            <h3 className="mb-1 font-bold text-gray-900">
              Social media
            </h3>
            <div className="-ml-2 flex">
              <a href="https://www.facebook.com/thanospersonal/"
                 rel="noopener noreferrer"
                 target="_blank"
                 title="Visit my Facebook profile"
                 className="text-blue-600 p-2 hover:opacity-60">

                <FontAwesomeIcon icon={faFacebook} size="2x"/>
              </a>
              <a href="https://twitter.com/thparavantis"
                 rel="noopener noreferrer"
                 target="_blank"
                 title="Visit my Twitter profile"
                 className="text-blue-400 p-2 hover:opacity-60">
                <FontAwesomeIcon icon={faTwitter} size="2x"/>
              </a>
              <a href="https://www.linkedin.com/in/thanosparavantis/"
                 rel="noopener noreferrer"
                 target="_blank"
                 title="Visit my LinkedIn profile"
                 className="text-blue-800 p-2 hover:opacity-60">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </a>
              <a href="https://github.com/thanosparavantis"
                 rel="noopener noreferrer"
                 target="_blank"
                 title="Visit my GitHub profile"
                 className="text-gray-900 p-2 hover:opacity-60">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
              <a href="https://www.youtube.com/channel/UCjBLN827xiPCA19MMt_jbmA"
                 rel="noopener noreferrer"
                 target="_blank"
                 title="Visit my YouTube channel"
                 className="text-red-700 p-2 hover:opacity-60">
                <FontAwesomeIcon icon={faYoutube} size="2x"/>
              </a>
            </div>
          </address>
        </section>
        <section className="mb-5 bg-white border rounded">
          <h2 className="px-5 md:px-8 py-5 text-lg font-bold border-b">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="mr-3"/>
            Contact form
          </h2>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <div className="px-5 md:px-8 py-5 flex flex-col">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-gray-900 font-bold cursor-pointer mb-2 text-sm md:text-base"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    required
                    disabled={loading}
                    value={fullName || ""}
                    onChange={handleFullNameChange}
                    onFocus={resetStatus}
                    className="w-full px-3 py-2 border rounded text-gray-800
                                   text-sm border-gray-400 focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-900 font-bold cursor-pointer mb-2 text-sm md:text-base"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    disabled={loading}
                    value={email || ""}
                    onChange={handleEmailChange}
                    onFocus={resetStatus}
                    className="w-full px-3 py-2 border rounded text-gray-800
                                   text-sm border-gray-400 focus:outline-none focus:ring-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-gray-900 font-bold cursor-pointer mb-2 text-sm md:text-base"
                  >
                    Message
                  </label>
                  <TextareaAutosize
                    minRows="4"
                    name="message"
                    id="message"
                    required
                    disabled={loading}
                    value={message || ""}
                    onChange={handleMessageChange}
                    onFocus={resetStatus}
                    className="w-full px-3 py-2 border rounded text-gray-800 leading-normal
                               text-sm border-gray-400 resize-none focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

              {success && (
                <div className="mt-8 text-sm font-bold text-green-500 text-center">
                  Your form has been submitted, thank you for contacting.
                </div>
              )}

              {error && (
                <div className="mt-8 text-sm font-bold text-red-600 text-center">
                  Form submission failed, please try again later.
                </div>
              )}
            </div>
            <div className="px-5 md:px-8 py-3 border-t flex items-center justify-center text-center">
              {loading ? (
                <button className="w-full shadow text-white font-bold rounded py-3
                                   bg-amber-500 cursor-not-allowed"
                        disabled>
                  <FontAwesomeIcon icon={faSpinner} spin className="mr-3"/>
                  Sending...
                </button>
              ) : (
                <button className="w-full shadow text-gray-100 font-bold rounded py-3
                                   focus:ring-2 focus:ring-offset-1 bg-amber-500 hover:bg-amber-600">
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-3"/>
                  Send
                </button>
              )}
            </div>
          </form>
        </section>
      </main>
    </PageTemplate>
  )
}