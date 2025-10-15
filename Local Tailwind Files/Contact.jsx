import React from "react";
import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({
  //         ...prev,
  //         [name]: value,
  //     }));
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add your form submission logic here
    const mailtoLink = `mailto:gangwar030@gmail.com?subject=Contact from Portfolio&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`;
    window.location.href = mailtoLink;
    setForm({
      name: " ",
      email: " ",
      message: " ",
    });
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="mt-4 text-xl text-center font-semibold text-gray-600">
            Feel free to reach out for any inquiries or collaborations!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="name"
              value={FormData.name}
              onChange={handleChange}
              className="w-full mt-1 block border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email"
              value={FormData.email}
              onChange={handleChange}
              className="w-full mt-1 block border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="message"
              value={FormData.message}
              onChange={handleChange}
              className="w-full mt-1 block border border-gray-300 rounded-lg p-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className=" w-full px-6 py-3 bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
