import * as React from "react"

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or email service
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll be in touch soon.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact-form" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-dark-navy">Request a Demo</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 font-bold mb-2">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm