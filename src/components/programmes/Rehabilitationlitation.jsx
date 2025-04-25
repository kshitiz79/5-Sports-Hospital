'use client';

import React from 'react';

const RehabilitationPackages = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10 text-gray-900">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Section Title */}
        <h2 className="text-green-600 text-sm font-bold">// REHABILITATION PACKAGES</h2>

        {/* ACL REHAB PACKAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-bold">ACL, ANKLE, KNEE, HIP, SHOULDER AND SPINAL SURGERY</h3>
            <p className="mt-4 text-gray-700">
              We offer a comprehensive rehabilitation service from pre-surgery through to full recovery.
              The same applies for those who are recovering from serious injury via the non-surgical route.
            </p>
          </div>
          <div>
            <p className="text-green-600 font-semibold">PRICE</p>
            <p className="mb-4">£POA (ranging from single sessions through to a comprehensive package)</p>

            <p className="text-green-600 font-semibold">DETAILS</p>
            <p className="text-gray-700 mb-3">
              We work closely with surgeons and health providers to offer flexible, bespoke rehabilitation packages
              determined by the needs of each individual.
            </p>
            <p className="text-gray-700 mb-3">
              Our team have a particular specialism in ACL rehabilitation with years of experience in professional sport.
              We have strong relationships with orthopedic surgeons and typically have 15–20 clients in ACL recovery at any time.
            </p>
            <p className="text-gray-700 mb-3">
              We recently recorded a podcast where Luke shared what to expect during the ACL recovery process.
              You can search "GoPerform Podcast" (episode 12) or listen below:
            </p>

            {/* Podcast Embed */}
            <div className="mt-4">
              <iframe
                width="100%"
                height="180"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/your-track-id&color=%2300cc66"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-t border-gray-300" />

        {/* REHAB MEMBERSHIP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-bold">REHAB MEMBERSHIP</h3>
            <p className="mt-4 text-gray-700">
              Access our facilities and staff on a daily basis to ensure the best possible injury outcomes.
            </p>
          </div>
          <div>
            <p className="text-green-600 font-semibold">PRICE</p>
            <p className="mb-4">£445/month</p>

            <p className="text-green-600 font-semibold">DETAILS</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Initial physiotherapy assessment</li>
              <li>4 one-to-one physiotherapy sessions per month</li>
              <li>Weekly soft tissue and manual therapy treatment</li>
              <li>Weekly strength and conditioning sessions with our coaches</li>
              <li>Daily access to GoPerform to conduct your rehabilitation</li>
              <li>Use of all specialist equipment including AlterG, GameReady, Normatec, Compex and Altitude training</li>
              <li>Online support</li>
            </ul>

            <p className="mt-6 text-green-600 font-semibold">IDEAL FOR</p>
            <p className="text-gray-700">
              Individuals looking to make a full return to sports participation and competition through a
              comprehensive support package. You can check out a video with one of our ACL rehabilitation members <a href="#" className="text-green-600 underline">here</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RehabilitationPackages;
