import React,{useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xovvbzkw");

  if (state.succeeded) {
      

    return (
        <div className="text-center text-green-500 text-lg w-[100%]">
            Your message has been sent successfully!
          </div>
    )
  
  }
  return (
    <div className="bg-[#1E1E1F] p-8 rounded-lg ">
      <h2 className="text-white text-2xl font-semibold mb-6">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-300 text-sm mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="p-3 rounded-lg bg-[#2B2B2C] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff623e] border border-transparent focus:border-transparent"
            placeholder="Enter your email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-2"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-300 text-sm mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="p-3 rounded-lg bg-[#2B2B2C] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff623e] border border-transparent focus:border-transparent"
            placeholder="Write your message here"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-2"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-gradient-to-r from-[#ec9162] to-[#ff623e] text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Message
          </button>
        </div>
      </form>
      
    </div>
  );
}

export default ContactForm;