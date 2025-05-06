'use client';

import { Flame, MapPin } from 'lucide-react'; // use valid icons

export default function FeatureCardSection() {
  const features = [
    {
      icon: <Flame className="h-10 w-10 text-yellow-400" />, // valid replacement
      title: 'WORLD CLASS CARE',
      description:
        ' With years of experience in providing exceptional dental care, our team at COSMODENTAL, 5 Sports Hospital is committed to delivering world-class dental treatments in a comfortable and relaxed environment. Our goal is to ensure that every patient receives the best possible care while feeling at ease throughout their visit.',
    },
    {
      icon: <MapPin className="h-10 w-10 text-yellow-400" />,
      title: 'STATE OF THE ART',
      description:
        'We pride ourselves on using the latest and most advanced dental equipment and technology to offer individualized care. By combining cutting-edge tools with thorough diagnostics, we provide high-quality, precise treatments that cater to your unique needs. At COSMODENTAL, we ensure that every procedure is as effective and efficient as possible, giving you the best results with the highest level of care.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-zinc-900 text-white rounded-md p-8 text-center shadow-lg"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <div className="w-12 h-0.5 bg-gray-400 mx-auto mb-4" />
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
