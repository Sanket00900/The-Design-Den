import Image from 'next/image';

const teamMembers = [
  { name: 'John Doe', designation: 'Lead Designer', src: '/team1.jpg' },
  { name: 'Jane Smith', designation: 'Project Manager', src: '/team2.jpg' },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Meet Our Team</h2>

        <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-80">
                <Image
                  src={member.src}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
