export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center text-gray-800">📬 Contact Us</h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto">
        Have questions or need support? We’re here to help. Reach out anytime via the contact form or details below.
      </p>

      {/* Contact Info */}
      <div className="bg-white shadow-sm rounded-lg p-6 space-y-4 text-gray-700">
        <div>
          <h2 className="text-lg font-semibold">Email</h2>
          <a href="mailto:support@resumebuilder.pro" className="text-blue-600 hover:underline">
            support@resumebuilder.pro
          </a>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Phone</h2>
          <p>+91 98765 43210</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Office Hours</h2>
          <p>Monday to Friday, 9:00 AM – 6:00 PM IST</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
