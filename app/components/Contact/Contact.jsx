'use client';
import { useState } from 'react';

export default function AboutUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    const subject = "Interior Design Enquiry";
    const body = `Hello,\n\nYou have received an enquiry from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nRegards,\n${name}`;

    const mailtoLink = `mailto:sanketsjagdale999@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Reset the form state after submission
  setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="about-us" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10">
        {/* Left Section: Contact Information */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
          <p className="mb-4 text-gray-700">
            <strong>Office Location:</strong> 123 Interior St, Design City, ST 56789
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Email:</strong> contact@interiordesign.com
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Working Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM
          </p>
        </div>

        {/* Right Section: Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
