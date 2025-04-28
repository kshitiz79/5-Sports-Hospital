// app/programs/[id]/page.jsx

import ProgramClient from '@/components/programmes/ProgramClient';
import data from '../../../../public/data.json'; // Adjust path to your data.json

// Generate static parameters for the dynamic route
export async function generateStaticParams() {
  const programIds = Object.keys(data.sections.programDetails).map((id) => ({
    id,
  }));
  return programIds;
}

// Server Component to fetch data and render the Client Component
export default async function ProgramPage({ params }) {
  const { id } = params;

  // Fetch or access data.json (in this case, using imported data)
  const program = data.sections.programDetails[id];

  // Handle case where program is not found
  if (!program) {
    return (
      <section className="bg-white min-h-screen py-12 px-4 md:px-10 text-gray-900">
        <div className="max-w-5xl mx-auto text-red-500 text-center py-12">
          Error: Programme with id "{id}" not found
        </div>
      </section>
    );
  }

  // Pass the program data to the Client Component
  return <ProgramClient initialData={program} />;
}