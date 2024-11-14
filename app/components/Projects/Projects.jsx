import Image from 'next/image';
import Img1 from '@/public/images/1.jpg'

const projectImages = [
  { src: '/img1.jpg', title: 'Project Title 1', description: 'Brief description of Project 1', size: 'small' },
  { src: '/img2.jpg', title: 'Project Title 2', description: 'Brief description of Project 2', size: 'large' },
  { src: '/img3.jpg', title: 'Project Title 3', description: 'Brief description of Project 3', size: 'small' },
  { src: '/img4.jpg', title: 'Project Title 4', description: 'Brief description of Project 4', size: 'small' },
  { src: '/img5.jpg', title: 'Project Title 5', description: 'Brief description of Project 5', size: 'large' },
  { src: '/img5.jpg', title: 'Project Title 5', description: 'Brief description of Project 5', size: 'large' },
  { src: '/img5.jpg', title: 'Project Title 5', description: 'Brief description of Project 5', size: 'large' },
  { src: '/img5.jpg', title: 'Project Title 5', description: 'Brief description of Project 5', size: 'large' },
  { src: '/img5.jpg', title: 'Project Title 5', description: 'Brief description of Project 5', size: 'large' },
  { src: '/img5.jpg', title: 'Project Title 5', description: 'Brief description of Project 5', size: 'large' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Projects</h2>
        
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {projectImages.map((project, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                project.size === 'large' ? 'row-span-2' : ''
              }`}
            >
              <Image
                src={Img1}
                alt={project.title}
                layout="responsive"
                width={400}
                height={project.size === 'large' ? 700 : 500}
                className="transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
