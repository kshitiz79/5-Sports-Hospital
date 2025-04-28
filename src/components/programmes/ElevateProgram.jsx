"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ElevateProgramme = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data.json");
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log("Fetched data:", jsonData);
        setData(jsonData.sections.programmes || []);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p className="text-red-500 text-center py-12">Error: {error}</p>;
  }

  return (
    <div className="bg-black py-16">
      {data.length > 0 ? (
        data.map((item, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div
              key={item.id || index}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-12 ${
                isImageLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`relative w-full md:w-1/2 h-[400px] transform transition-transform duration-500 ${
                  isImageLeft ? "-rotate-3" : "rotate-3"
                } hover:rotate-0`}
              >
                <Image
                  src={item.imageUrl}
                  alt={`${item.heading} image`}
                  fill
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center">
                  {isImageLeft ? (
                    <>
                      <span className="text-green-500 ml-4 text-4xl">←</span>
                      {item.heading}
                    </>
                  ) : (
                    <>
                      {item.heading}
                      <span className="text-green-500 mr-4 text-4xl">→</span>
                    </>
                  )}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{item.paragraph}</p>
                <Link
                  href={`/programs/${item.id}`} // Updated to match the programs route
                  className="text-green-500 font-semibold inline-block transition hover:underline"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-white text-center py-12">Loading programmes...</p>
      )}
    </div>
  );
};

export default ElevateProgramme;