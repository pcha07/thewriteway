import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <form
      action="https://getform.io/f/13b9e1ff-ff59-4f67-8800-1004c5b12ce4"
      method="POST"
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="border border-gray-400 p-2 w-full"
          name="message"
          id="message"
          rows="8"
          required
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
