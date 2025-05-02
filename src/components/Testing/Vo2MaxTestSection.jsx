"use client";
import React from "react";

export default function VO2MaxTestSection() {
  return (
    <div className="bg-white py-12 px-6 md:px-20 text-gray-900">
      <h2 className="text-green-600 font-semibold text-lg">// OUR VO₂ MAX SERVICES</h2>

      <div className="mt-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-extrabold text-gray-900">VO₂ MAX TEST</h3>
          <p className="mt-4 text-base leading-relaxed">
            Acquire a scientifically accurate measure of your aerobic capacity. A VO₂ Max test is the gold-standard measure of aerobic capacity.
          </p>
          <p className="mt-4 text-base text-gray-600">
            A high VO₂ Max is a prerequisite for successful athletic performance in endurance events.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 space-y-4">
          {/* <div>
            <p className="font-bold text-green-600">PRICE</p>
            <p className="font-extrabold">£95</p>
          </div> */}

          <div>
            <p className="font-bold text-green-600">DURATION</p>
            <p>Approximately 45 minutes</p>
          </div>

          <div>
            <p className="font-bold text-green-600">DETAILS</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
              <li>Performed either on a treadmill or WattBike, or your own bike on our Wahoo Kickr turbo trainer</li>
              <li>Accurate VO₂ Max value</li>
              <li>Running Economy (if you choose treadmill test)</li>
              <li>Training zones and pacing guidelines (predicted from identified maximum heart rate during test)</li>
            </ul>
            <p className="mt-2 text-sm">
              All information collected is analysed and displayed within a physiological report that is sent to you following the test.
            </p>
          </div>

          <div>
            <p className="font-bold text-green-600">IDEAL FOR</p>
            <p>Anyone looking to gain an insight into their aerobic capacity and boost the effectiveness of their training.</p>
          </div>

          <div>
            <p className="font-bold text-green-600">READY TO BOOK?</p>
            <p className="font-bold">BOOK ONLINE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
