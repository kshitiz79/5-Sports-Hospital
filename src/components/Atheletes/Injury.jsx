import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const consultationOptions = [
  {
    title: "Initial Consultation",
    price: "£85 / £110 (Clinical Director Luke Anthony)",
    duration: "50 minutes",
    details:
      "Includes a comprehensive injury assessment with a rehabilitation plan",
    idealFor:
      "Anyone with an injury needing assessment and a comprehensive rehabilitation plan",
    bookings: ["BOOK ONLINE", "BOOK ONLINE (Luke Anthony)"],
  },
  {
    title: "Follow-up",
    price: "£58 / £62 (Clinical Director Luke Anthony)",
    duration: "40 minutes",
    details:
      "A follow up appointment includes a re-assessment of the injury and a review and progression of rehabilitation exercises given.",
    idealFor: "Ongoing treatment and rehabilitation to support your recovery",
    bookings: ["BOOK ONLINE", "BOOK ONLINE (Luke Anthony)"],
  },
  {
    title: "Online appointment",
    price: "£60 initial consultation | £45 follow up",
    duration: "40 mins (initial) / 30 mins (follow-up)",
    details:
      "We continue to offer remote video consultations to those who are shielding or live further away. You will receive a confirmation email with an embedded secure telehealth link to access at your specified appointment time.",
    idealFor: "Remote assessments",
    bookings: ["Initial: BOOK ONLINE", "Follow-Up: BOOK ONLINE"],
  },
  {
    title: "Pro-Athlete Assessment",
    price: "£180",
    duration: "85 minutes",
    details:
      "To include a comprehensive injury assessment with initial manual therapy intervention and a rehabilitation plan",
    idealFor:
      "Professional athletes needing a longer more specific sports based physiotherapy assessment.",
    bookings: ["BOOK ONLINE"],
  },
];

export default function Injury() {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Injury Consultations & Bookings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consultationOptions.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white p-4 h-full flex flex-col justify-between"
            >
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Price:</strong> {item.price}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Duration:</strong> {item.duration}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Details:</strong> {item.details}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Ideal for:</strong> {item.idealFor}
                </p>

                <div className="flex flex-col gap-2">
                  {item.bookings.map((link, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Go to booking
          </Link>
        </div>
      </div>
    </section>
  );
}
