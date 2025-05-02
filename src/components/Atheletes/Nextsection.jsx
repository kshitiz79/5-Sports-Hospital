import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Physiotherapy",
    description: "Expert diagnosis, treatment and rehabilitation.",
    linkText: "Find out more",
    detail: "Physiotherapy at GoPerform",
  },
  {
    title: "Rehabilitation Programme",
    description: "Specialist rehabilitation and support service.",
    linkText: "Find out more",
    detail: "Rehabilitation at GoPerform",
  },
  {
    title: "Soft Tissue & Performance Therapy",
    description:
      "Soft Tissue Therapy engages the neuromyofascial matrix of the body, helping to optimise movement, reduce pain and dysfunction and enhance sporting performance.",
    linkText: "Find out more",
    detail: "Soft Tissue & Performance Therapy at GoPerform",
  },
  {
    title: "Sports Massage",
    description: "Give your body a boost with our high quality Sports Massage service.",
    linkText: "Find out more",
    detail: "Sports massage at GoPerform",
  },
  {
    title: "Physiotherapy for Children",
    description:
      "Specialist physiotherapy assessment and injury management for children.",
    linkText: "Find out more",
    detail: "Physiotherapy for children at GoPerform",
  },
  {
    title: "Pro-Athletes",
    description:
      "Specialist assessments and rehabilitation for professional and elite athletes.",
    linkText: "Find out more",
    detail: "Pro-athlete GoPerform",
  },
  {
    title: "Diet & Nutrition",
    description:
      "Maximise your training and invigorate your lifestyle with your own tailored nutrition guidance.",
    linkText: "Find out more",
    detail: "Nutrition at GoPerform",
  },
  {
    title: "Shockwave Therapy",
    description:
      "Shockwave Therapy is a highly effective and clinically proven treatment for chronic musculoskeletal conditions.",
    linkText: "Find out more",
    detail: "Shockwave Therapy",
  },
  {
    title: "Anti-Gravity Treadmill",
    description: "A game-changer for rehabilitation, or just getting mobile again.",
    linkText: "Find out more",
    detail: "Anti-gravity treadmill at GoPerform",
  },
];

export default function InjuryServicesSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">Home / Injury</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Injury
        </h2>
        <p className="text-gray-700 max-w-2xl mb-12">
          Whatever your injury, our multidisciplinary team can help guide you through the process of diagnosis and recovery. Drawing on our broad experience of working in elite sport we can provide the necessary expertise to return you to full health.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 h-full flex flex-col justify-between"
            >
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <Link href="#" className="text-blue-600 font-medium hover:underline">
                  {service.linkText}
                </Link>
                <p className="text-xs text-gray-500 mt-2 italic">
                  {service.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">Professional Associations</p>
          {/* Add logos or links as needed */}
        </div>
      </div>
    </section>
  );
}
