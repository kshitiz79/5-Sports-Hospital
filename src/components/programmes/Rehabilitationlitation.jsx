'use client';

import React from 'react';
import { rehabData } from './../../data/rehabData';

const RehabilitationPackages = ({ data = rehabData }) => {
  const { sectionTitle, aclRehabPackage, rehabMembership } = data;

  return (
    <section className="bg-white py-20 px-4 md:px-10 text-gray-900">
      <div className="max-w-5xl mx-auto space-y-20">
        <h2 className="text-green-600 text-sm font-bold">{sectionTitle}</h2>

        {/* ACL REHAB PACKAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-bold">{aclRehabPackage.title}</h3>
            {aclRehabPackage.description.map((line, idx) => (
              <p key={idx} className="mt-4 text-gray-700">{line}</p>
            ))}
          </div>
          <div>
            <p className="text-green-600 font-semibold">{aclRehabPackage.price.label}</p>
            <p className="mb-4">{aclRehabPackage.price.value}</p>

            <p className="text-green-600 font-semibold">{aclRehabPackage.details.label}</p>
            {aclRehabPackage.details.paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-700 mb-3">{para}</p>
            ))}

            <div className="mt-4">
              <iframe
                width={aclRehabPackage.podcastEmbed.width}
                height={aclRehabPackage.podcastEmbed.height}
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={aclRehabPackage.podcastEmbed.iframeSrc}
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="my-12 border-t border-gray-300" />

        {/* REHAB MEMBERSHIP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-bold">{rehabMembership.title}</h3>
            {rehabMembership.description.map((line, idx) => (
              <p key={idx} className="mt-4 text-gray-700">{line}</p>
            ))}
          </div>
          <div>
            <p className="text-green-600 font-semibold">{rehabMembership.price.label}</p>
            <p className="mb-4">{rehabMembership.price.value}</p>

            <p className="text-green-600 font-semibold">{rehabMembership.details.label}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {rehabMembership.details.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="mt-6 text-green-600 font-semibold">{rehabMembership.idealFor.label}</p>
            <p className="text-gray-700">{rehabMembership.idealFor.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RehabilitationPackages;
