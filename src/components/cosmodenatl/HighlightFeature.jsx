'use client';

import {
  HandHeart,
  ShieldPlus,
  Stethoscope,
  Target,
} from 'lucide-react';

export default function HighlightFeatures() {
  const features = [
    {
      icon: <HandHeart className="h-32 w-32 text-yellow-400" />,
      title: 'Discover Who We Are and Why We Stand Out',
    },
    {
      icon: <ShieldPlus className="h-32 w-32 text-yellow-400" />,
      title: 'Receive the Expert Care You Truly Deserve',
    },
    {
      icon: <Stethoscope className="h-32 w-32 text-yellow-400" />,
      title: 'Experience Our Care: Join Us as a Patient Today',
    },
    {
      icon: <Target className="h-32 w-32 text-yellow-400" />,
      title: 'Find the Perfect Treatment for Your Needs',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <div className="w-12 h-0.5 bg-gray-300 mx-auto mb-4" />
            <h3 className="text-black font-semibold text-lg leading-relaxed tracking-wide">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
