// app/components/ProgramClient.jsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function ProgramClient({ initialData }) {
  const data = initialData || {}; // Fallback to empty object if initialData is null/undefined

  return (
    <section className="bg-white py-20 px-4 md:px-10 text-gray-900">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Program Section Title */}
        <h2 className="text-green-600 text-sm font-bold">
          {data.title || '// PROGRAM DETAILS'}
        </h2>

        {/* Program Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            {/* Program Title */}
            <h3 className="text-lg font-bold">{data.title || 'No Title Available'}</h3>

            {/* Description */}
            {data.description && data.description.length > 0 ? (
              data.description.map((line, idx) => (
                <p key={idx} className="mt-4 text-gray-700">{line}</p>
              ))
            ) : (
              <p className="mt-4 text-gray-700">No description available.</p>
            )}
          </div>

          <div>
            {/* Price Section */}
            {data.price ? (
              <>
                <p className="text-green-600 font-semibold">{data.price.label || 'PRICE'}</p>
                <p className="mb-4">{data.price.value || 'N/A'}</p>
              </>
            ) : (
              <>
                <p className="text-green-600 font-semibold">PRICE</p>
                <p className="mb-4">N/A</p>
              </>
            )}

            {/* Details Section */}
            {data.details ? (
              <>
                <p className="text-green-600 font-semibold">{data.details.label || 'DETAILS'}</p>
                {data.details.paragraphs && data.details.paragraphs.length > 0 ? (
                  data.details.paragraphs.map((para, idx) => (
                    <p key={idx} className="text-gray-700 mb-3">{para}</p>
                  ))
                ) : data.details.items && data.details.items.length > 0 ? (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {data.details.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 mb-3">No details available.</p>
                )}
              </>
            ) : (
              <>
                <p className="text-green-600 font-semibold">DETAILS</p>
                <p className="text-gray-700 mb-3">No details available.</p>
              </>
            )}

            {/* Podcast Embed */}
            {data.podcastEmbed && (
              <div className="mt-4">
                <iframe
                  width={data.podcastEmbed.width || '100%'}
                  height={data.podcastEmbed.height || 180}
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={data.podcastEmbed.iframeSrc}
                />
              </div>
            )}

            {/* Ideal For Section */}
            {data.idealFor ? (
              <>
                <p className="mt-6 text-green-600 font-semibold">{data.idealFor.label || 'IDEAL FOR'}</p>
                <p className="text-gray-700">{data.idealFor.description || 'N/A'}</p>
              </>
            ) : (
              <>
                <p className="mt-6 text-green-600 font-semibold">IDEAL FOR</p>
                <p className="text-gray-700">N/A</p>
              </>
            )}
          </div>
        </div>

        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="text-green-600 font-semibold hover:underline inline-block"
            aria-label="Back to programmes"
          >
            ← Back to Programmes
          </Link>
        </div>
      </div>
    </section>
  );
}