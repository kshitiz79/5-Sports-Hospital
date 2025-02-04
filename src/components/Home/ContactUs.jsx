"use client";

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Placeholder: Handle form submission
    setFormData({ name: '', email: '', message: '' });
  };

  const position = [28.6139, 77.2090]; // Replace with your coordinates

  return (
    <section className="section-class">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div> {/* Map & Contact Info */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
              <div className="h-64 w-full rounded-lg overflow-hidden">
                <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>5 Sports Hospital <br /> Your Address Here</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-2">Phone: +91-123-456-7890</p>
              <a 
                href="https://wa.me/911234567890" 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
                target="_blank"  // Open in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                WhatsApp Chat
              </a>
              <p className="mt-4">24/7 Emergency Helpline: 102</p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default ContactUs;