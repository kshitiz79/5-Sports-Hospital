'use client';
import React from "react";

export default function OrthopedicCareSection() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 space-y-24">

      {/* Section Wrapper */}
      {[
      
        {
          title: "// ORTHOBIOLOGICS & REGENERATIVE THERAPIES",
          subtitle: "Heal Naturally. Train Continuously.",
          content: `We believe the human body holds the power to heal itself—when guided correctly. Our therapies use cutting-edge science to stimulate natural tissue repair and regeneration. Especially effective for athletes or active individuals suffering from joint degeneration, tendon injuries, or cartilage damage.`,
          bullets: [
            "Platelet-rich plasma (PRP)",
            "Bone marrow concentrate",
            "Stem cell therapy"
          ],
          note: `These treatments are minimally invasive, outpatient-friendly, and offer shorter recovery times compared to surgery.`,
          callout: {
            heading: "WHEN TO CONSIDER THIS?",
            text: `If you're facing recurring tendonitis, mild arthritis, or joint pain that hasn't improved with physiotherapy.`
          }
        },
        {
          title: "// JOINT PRESERVATION",
          subtitle: "Delay Surgery. Restore Movement.",
          content: `Our Joint Preservation Program focuses on early intervention strategies that can delay or even eliminate the need for joint replacement.`,
          bullets: [
            "Viscosupplementation (joint lubrication injections)",
            "Targeted physiotherapy",
            "Cartilage restoration",
            "Regenerative injections"
          ],
          note: `Ideal for early-stage arthritis or sports-induced joint stress, focusing on long-term function over symptom masking.`
        },
        {
          title: "// ROBOTIC KNEE REPLACEMENT",
          subtitle: "When Precision Matters Most",
          content: `Using robotic assistance, we achieve millimeter-level accuracy—better joint alignment, less tissue trauma, and smoother recovery.`,
          bullets: [
            "Pinpoint accuracy",
            "Less post-operative pain",
            "Faster recovery",
            "Better joint alignment and longevity"
          ],
          note: `Robotic precision means you walk better, sooner—and for longer.`
        },
        {
          title: "// SPORTS INJURIES & LIGAMENT SURGERY",
          subtitle: "From ACL Tears to Muscle Repairs – We’ve Got You",
          content: `Specialized care tailored for athletes—our experts ensure you don’t just heal, you come back stronger.`,
          bullets: [
            "ACL, PCL, and meniscus surgeries",
            "Rotator cuff and shoulder dislocations",
            "Achilles and ankle ligament repairs"
          ],
          note: `Every plan is personalized for your sport, timeline, and performance goals.`
        },
        {
          title: "// ARTHROSCOPY",
          subtitle: "Small Incisions. Big Impact.",
          content: `Arthroscopy allows us to diagnose and treat joint issues using a camera and tiny instruments.`,
          bullets: [
            "Knee and shoulder injuries",
            "Loose cartilage or bone fragments",
            "Ligament reconstructions"
          ],
          note: `Why opt for open surgery when a keyhole could do the trick?`,
          italic: true
        },
        {
          title: "// FRACTURE MANAGEMENT",
          subtitle: "Immediate Care. Expert Hands. Faster Healing.",
          bullets: [
            "On-site X-rays and imaging",
            "Emergency stabilization",
            "Surgical or non-surgical repair",
            "Custom splints and casts",
            "Post-fracture rehabilitation"
          ],
          note: `Immediate care = optimal healing. Delay can mean lifelong pain or imbalance.`
        },
        {
          title: "// SURGICAL SECOND OPINION",
          subtitle: "Not Sure What to Do Next? We’ll Help You Decide.",
          content: `Surgery is a big decision—make it an informed one. Our experts provide honest, independent reviews of your case to explore all options.`,
          note: `We’re not here to sell surgery—we’re here to guide you toward your best outcome.`,
          expertPanel: [
            "Dr. [Name Placeholder] – Orthopedic Surgeon (Joint replacement & trauma)",
            "Dr. [Name Placeholder] – Sports Orthopedist (ACL, PCL, ligament recon)",
            "Dr. [Name Placeholder] – Arthroscopy & Shoulder Specialist (Keyhole surgeries)",
            "Dr. [Name Placeholder] – Spine & Neuro-Ortho Consultant (Disc and motion surgery)",
            "Dr. [Name Placeholder] – Joint Replacement Surgeon (Robotic & personalized implants)"
          ]
        }
      ].map((section, idx) => (
        <section key={idx} className="space-y-6">
          <h2 className="text-green-500 text-4xl font-bold border-b border-green-700 pb-2 tracking-wider">
            {section.title}
          </h2>
          <h3 className="text-3xl font-semibold text-white">{section.subtitle}</h3>
          {section.content && (
            <p className="text-2xl text-gray-100">{section.content}</p>
          )}
          {section.bullets && (
            <ul className="list-disc pl-6 text-2xl text-white space-y-2">
              {section.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && (
            <p className={`text-2xl ${section.italic ? "italic" : ""} text-gray-400`}>
              {section.note}
            </p>
          )}
          {section.callout && (
            <div className="bg-green-900/30 border-l-4 border-green-500 px-4 py-3 rounded-lg">
              <p className="text-green-400 font-bold text-2xl">{section.callout.heading}</p>
              <p className="text-2xl text-white mt-1">{section.callout.text}</p>
            </div>
          )}
          {section.expertPanel && (
            <div className="bg-gray-800/60 rounded-xl p-6 space-y-4 mt-4">
              <p className="text-green-500 font-bold text-2xl">OUR EXPERT PANEL</p>
              <ul className="list-disc pl-6 text-2xl text-white space-y-2">
                {section.expertPanel.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
