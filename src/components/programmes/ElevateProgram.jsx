import React from "react";
import Image from "next/image";

const data = [
  {
    heading: "Rehabilitation Programme",
    paragraph: "Specialist rehabilitation and support service.",
    imageUrl: "/pain5.png",
    linkText: "FIND OUT MORE",
  },
  {
    heading: "Pain Management Program",
    paragraph:
      "The Pain Management Program at 5 Sports Hospital offers personalized, evidence-based solutions to alleviate chronic and acute pain. Combining advanced diagnostics, physical therapy, and minimally invasive techniques, our expert team helps athletes and individuals regain mobility and improve quality of life. Tailored to each patient’s needs, the program focuses on long-term relief and prevention.",
    imageUrl: "/pain4.png",
    linkText: "FIND OUT MORE",
  },
  {
    heading: "Strength Enhancement Program",
    paragraph:
      "Our Strength Enhancement Program is designed to boost physical performance, build muscular endurance, and improve overall strength. Tailored for all fitness levels, the program combines resistance training, functional workouts, and expert guidance to help participants achieve sustainable strength gains and improved body mechanics.",
    imageUrl: "/pain2.png",
    linkText: "FIND OUT MORE",
  },
  {
    heading: "Athlete Development Program",
    paragraph:
      "Our Athlete Development Program focuses on nurturing talent and enhancing performance through a structured approach to training, nutrition, and recovery. Designed for aspiring and professional athletes, the program builds strength, speed, agility, and mental resilience to help participants reach their peak potential in their chosen sport.",
    imageUrl: "/pain6.png",
    linkText: "FIND OUT MORE",
  },
  {
    heading: "Individual Athlete Development Program",
    paragraph:
      "The Individual Athlete Development Program offers personalized coaching tailored to each athlete's unique goals, strengths, and areas for improvement. With a focus on sport-specific training, performance optimization, and long-term growth, this program empowers athletes to reach their full potential through one-on-one guidance and customized plans.",
    imageUrl: "/pain3.png",
    linkText: "FIND OUT MORE",
  },
  {
    heading: "Team Athlete Development Program",
    paragraph:
      "The Team Athlete Development Program is designed to elevate overall team performance through coordinated training, skill development, and strategic conditioning. Focusing on teamwork, communication, and sport-specific drills, this program enhances both individual contributions and collective success on the field or court.",
    imageUrl: "/pain.png",
    linkText: "FIND OUT MORE",
  },
];

const ElevateProgramme = () => {
  return (
    <div className="bg-black py-16">
      {data.map((item, index) => {
        const isImageLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-12 ${
              isImageLeft ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div
              className={`relative w-full md:w-1/2 h-[400px] transform transition-transform duration-500 ${
                isImageLeft ? "-rotate-3" : "rotate-3"
              } hover:rotate-0`}
            >
              <Image
                src={item.imageUrl}
                alt={`${item.heading} image`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center">
                {isImageLeft ? (
                  <><span className="text-green-500 ml-4 text-4xl">←</span>
                    {item.heading}
                    {/* <span className="text-green-500 ml-4 text-4xl">←</span> */}
                  </>
                ) : (
                  <>
                    {/* <span className="text-green-500 mr-4 text-4xl">→</span> */}
                    {item.heading}
                    <span className="text-green-500 mr-4 text-4xl">→</span>
                  </>
                )}
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                {item.paragraph}
              </p>
              <a
                href="#"
                className="text-green-500 font-semibold inline-block transition hover:underline"
              >
                {item.linkText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ElevateProgramme;
