"use client";
import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

function ContactUsPage() {
  const [selectedFields, setSelectedFields] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFields((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-b from-gray-500 to-black flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-6xl font-extrabold uppercase">    Get In Touch With Us</h1>
       
      </section>

      {/* Contact Info Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 p-3 rounded">
                <MapPinIcon className="h-10 w-10 text-black" />
              </div>
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide">Location</h4>
                <p className="text-gray-200 text-xs">MPS Building, Mullur Sarjapur Road</p>
                <a
                  href="https://www.google.com/maps?q=Site+No+40+%26+41,+1st+floor,+MPS+Building,+Ambedkar+Nagar,+Mullur+Sarjapur+Road,+Carmelram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-400 text-xs underline"
                >
                  View Location
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 p-3 rounded">
                <PhoneIcon className="h-10 w-10 text-black" />
              </div>
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide">Phone</h4>
                <p className="text-gray-200">9353555755</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 p-3 rounded">
                <EnvelopeIcon className="h-10 w-10 text-black" />
              </div>
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide">Email</h4>
                <p className="text-gray-200">fivesportshospital@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Image */}
          <div className="md:w-1/2 space-y-6 mb-8 md:mb-0 md:mr-8">
            <img
              src="/3.png"
              alt="Two People in Sports Attire"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-xl">
            <div className="space-y-4 mb-10">
              <h3 className="text-green-500 uppercase font-bold tracking-wide text-sm">
                Contact Us
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">ASK US ANYTHING.</h2>
              <p className="text-gray-300 leading-relaxed">
                We are here to assist you with your inquiries. Feel free to reach out!
              </p>
            </div>
            <form className="space-y-6">
              {/* Name & Phone Number */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="flex-1 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="flex-1 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-lg"
                />
              </div>

              {/* City & State */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="City"
                  required
                  className="flex-1 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="State"
                  required
                  className="flex-1 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-lg"
                />
              </div>

              {/* Email Address */}
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-lg"
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="5"
                required
                className="w-full p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-lg"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-green-500 text-black font-bold py-3 px-6 uppercase hover:bg-lime-400 transition-colors w-full rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUsPage;
