import React from "react"
import Axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import ReCAPTCHA from "react-google-recaptcha"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showSuccess: false,
      showFailure: false,
      loading: false,
    }

    this.captchaRef = React.createRef()
    this.inputHandler = this.inputHandler.bind(this)
    this.captchaHandler = this.captchaHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  inputHandler(event) {
    if (this.state.loading) {
      return
    }

    const field = event.target.name
    const value = event.target.value

    this.setState({
      [field]: value,
    })
  }

  captchaHandler(value) {
    this.setState({
      captcha: value,
    })
  }

  resetInput() {
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      captcha: "",
    })

    this.captchaRef.current.reset()
  }

  toggleLoading() {
    this.setState((state, props) => ({
      loading: !state.loading,
    }))
  }

  isFormValid() {
    return this.state.first_name
      && this.state.last_name
      && this.state.email
      && this.state.message
      && this.state.captcha
  }

  showSuccess() {
    this.setState({
      showSuccess: true,
      showFailure: false,
    })
  }

  showFailure() {
    this.setState({
      showSuccess: false,
      showFailure: true,
    })
  }

  submitHandler() {
    this.toggleLoading()
    this.cancelSource = Axios.CancelToken.source()
    const cancelToken = this.cancelSource.token

    Axios.post("https://formcarry.com/s/8-s5znRbPKu", {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "message": this.state.message,
      "g-recaptcha-response": this.state.captcha,
    }, {
      cancelToken: cancelToken,
    }).then(response => {
      this.showSuccess()
      this.resetInput()
    }).catch(error => {
      this.showFailure()
    }).finally(() => {
      this.toggleLoading()
    })
  }

  componentWillUnmount() {
    if (this.cancelSource) {
      this.cancelSource.cancel()
    }
  }

  render() {
    return <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:mr-5 md:w-1/2">
          <label htmlFor="first_name" className="mb-2 uppercase font-bold text-green-800 text-sm tracking-tight cursor-pointer">
            First Name
          </label>

          <input type="text" name="first_name" id="first_name" className="mb-8 p-2 border rounded text-gray-800 text-sm border-gray-600 focus:outline-none focus:shadow-outline" placeholder="Thanos" value={this.state.first_name || ""} onChange={this.inputHandler} required/>
        </div>
        <div className="flex flex-col md:w-1/2">
          <label htmlFor="last_name" className="mb-2 uppercase font-bold text-green-800 text-sm tracking-tight cursor-pointer">
            Last Name
          </label>

          <input type="text" name="last_name" id="last_name" className="mb-8 p-2 border rounded text-gray-800 text-sm border-gray-600 focus:outline-none focus:shadow-outline" placeholder="Paravantis" value={this.state.last_name || ""} onChange={this.inputHandler} required/>
        </div>
      </div>

      <label htmlFor="email" className="mb-2 uppercase font-bold text-green-800 text-sm tracking-tight cursor-pointer">
        E-mail address
      </label>

      <input type="email" name="email" id="email" className="mb-8 p-2 border rounded text-gray-800 text-sm border-gray-600 focus:outline-none focus:shadow-outline" placeholder="thanosparavantis@gmail.com" value={this.state.email || ""} onChange={this.inputHandler}/>

      <label htmlFor="message" className="mb-2 uppercase font-bold text-green-800 text-sm tracking-tight cursor-pointer">
        Message
      </label>

      <textarea name="message" id="message" className="mb-8 p-2 h-48 border rounded text-gray-800 text-sm border-gray-600 focus:outline-none focus:shadow-outline" placeholder="Write your message here..." onChange={this.inputHandler} value={this.state.message || ""} required/>

      <label className="mb-2 uppercase font-bold text-green-800 text-sm tracking-tight">
        Captcha
      </label>
      <div className="mb-8">
        <ReCAPTCHA sitekey="6LdMY74UAAAAAM3EIrRzslKtYWc2OKGriLEuu53y" onChange={this.captchaHandler} ref={this.captchaRef}/>
      </div>

      {this.state.showSuccess ? (
        <div className="mb-5 text-center text-green-700 font-bold">
          Your message has been sent.
        </div>
      ) : ""}

      {this.state.showFailure ? (
        <div className="mb-5 text-center text-red-700 font-bold">
          Failed to send message.
        </div>
      ) : ""}

      {this.state.loading || !this.isFormValid() ? (<button className="p-3 rounded text-white text-lg font-bold bg-gray-500 cursor-not-allowed" disabled>
        {this.state.loading ? <span>
            <FontAwesomeIcon icon={faSpinner} spin className="mr-2"/>
            Sending...
          </span> : <span>
              Send
          </span>}
      </button>) : (<button className="p-3 rounded text-white text-lg font-bold bg-orange-600 hover:bg-orange-500" onClick={this.submitHandler}>
        Send
      </button>)}
    </div>
  }
}
