import Image from 'next/image';

const projectItems = [
  { src: '/images/projects/1.jpg', type: 'image' },
  { src: '/images/projects/2.mp4', type: 'video' },
  { src: '/images/projects/3.JPG', type: 'image' },
  { src: '/images/projects/4.jpg', type: 'image' },
  { src: '/images/projects/5.mp4', type: 'video' },
  { src: '/images/projects/6.JPG', type: 'image' },
  { src: '/images/projects/7.JPG', type: 'image' },
  { src: '/images/projects/8.JPG', type: 'image' },
  { src: '/images/projects/9.JPG', type: 'image' },
  { src: '/images/projects/10.JPG', type: 'image' },
  { src: '/images/projects/11.jpg', type: 'image' },
  { src: '/images/projects/12.jpg', type: 'image' },
  { src: '/images/projects/13.JPG', type: 'image' },
  { src: '/images/projects/14.jpg', type: 'image' },
  { src: '/images/projects/15.JPG', type: 'image' },
  { src: '/images/projects/16.JPG', type: 'image' },
  { src: '/images/projects/17.JPG', type: 'image' },
  { src: '/images/projects/18.JPG', type: 'image' },
  { src: '/images/projects/19.JPG', type: 'image' },
  { src: '/images/projects/20.JPG', type: 'image' },
  { src: '/images/projects/21.jpg', type: 'image' },
  { src: '/images/projects/22.jpg', type: 'image' },
  { src: '/images/projects/23.jpg', type: 'image' },
  { src: '/images/projects/24.jpg', type: 'image' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Projects</h2>

        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ height: '20rem' }} // Default height in rem
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={`Project ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video
                autoPlay
                loop
                muted
                  src={item.src}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                ></video>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
