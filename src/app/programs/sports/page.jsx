import Image from "next/image";

export default function SportsPsychologyProgram() {
  return (
    <section className="bg-black py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-100">Mind Over Muscle: Train the Brain to Win the Game</h2>
          <p className="text-lg text-gray-200">
            Behind every great athlete is a resilient mind. At 5 Sports Hospital, our Sports Psychology Program helps athletes manage stress, boost confidence, sharpen focus, and bounce back from setbacks.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">What We Help With:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Performance anxiety</li>
              <li>Focus and concentration issues</li>
              <li>Confidence and motivation</li>
              <li>Recovery from injury trauma</li>
              <li>Team dynamics and communication</li>
            </ul>
          </div>

          <p className="text-md font-medium text-blue-700">Do you train your body every day but leave your mind behind?</p>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Our Tools & Techniques:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Mental conditioning drills</li>
              <li>Visualization & mindfulness practices</li>
              <li>Goal setting and mental clarity</li>
              <li>Coping strategies for high-pressure moments</li>
            </ul>
          </div>

          <p className="text-md font-semibold text-green-700">
            Even 1% improvement in mental strength can be the winning edge.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-md">
            <Image src="/images/sports-psych1.jpg" alt="Athlete meditating" fill className="object-cover" />
          </div>
          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-md">
            <Image src="/images/sports-psych2.jpg" alt="Focus training" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
