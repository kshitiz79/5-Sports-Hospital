import React from 'react';

const MeetOurExperts = () => {
  const experts = [
    {
      image: '/images/doctor1.jpg', // Replace with actual image paths
      name: 'Dr. John Doe',
      specialties: 'Sports Medicine, Orthopedics',
      consultationLink: '/book-consultation/dr-john-doe', // Link to booking page
    },
    {
      image: '/images/doctor2.jpg',
      name: 'Dr. Jane Smith',
      specialties: 'Physiotherapy, Rehabilitation',
      consultationLink: '/book-consultation/dr-jane-smith',
    },
    // ... more experts
  ];

  return (
    <section className="section-class">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Experts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{expert.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{expert.specialties}</p>
              <a
                href={expert.consultationLink}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Book Consultation
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurExperts;