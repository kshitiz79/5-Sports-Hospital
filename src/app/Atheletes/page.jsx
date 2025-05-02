import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LucideHeartPulse, LucideBrain, LucideFlame, LucideActivity, LucideBarChart2 } from "lucide-react";

const services = [
  {
    title: "Athletes Injury Management",
    subtitle: "From Pain to Performance—We Help You Heal Right",
    description:
      "Injuries can break momentum, confidence, and careers. Our Sports Injury Care unit focuses on not just recovery, but sustainable return-to-play.",
    icon: <LucideHeartPulse className="h-8 w-8 text-red-600" />,
  },
  {
    title: "Performance Lab",
    subtitle: "Measure What Matters. Improve What You Can’t See",
    description:
      "How do you know you’re improving if you don’t track it? Our Athlete Performance Lab uses science-backed diagnostics to evaluate and enhance physical capacity.",
    icon: <LucideBarChart2 className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Performance Enhancement Programs",
    subtitle: "Programs Designed to Elevate Every Level of an Athlete",
    description:
      "Our structured athlete programs combine training, testing, and therapy—all under one roof. Choose what fits your current journey.",
    icon: <LucideFlame className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Sports Psychology",
    subtitle: "Strong Mind. Stronger Game",
    description:
      "Performance isn't only physical—it’s mental. Our Sports Psychology program helps athletes overcome mental blocks, anxiety, and performance pressure.",
    icon: <LucideBrain className="h-8 w-8 text-purple-600" />,
  },
  {
    title: "Sports Nutrition",
    subtitle: "Fuel Right. Perform Better. Recover Faster",
    description:
      "Whether it’s a training day or game day, your body deserves performance-specific nutrition. Our expert sports nutritionists create customized plans for muscle gain or fat loss, endurance sports fueling, injury recovery support, and supplementation strategies.",
    icon: <LucideActivity className="h-8 w-8 text-green-600" />,
  },
];

export default function Athletes() {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Athlete Services
        </h2>
        <Separator className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  {service.icon}
                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>
                <h4 className="text-md text-gray-700 font-medium">
                  {service.subtitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
