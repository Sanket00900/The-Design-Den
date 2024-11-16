import Image from 'next/image';

export default function About() {
  const aboutUsText = `The Design Den is a interior design company offering end-to-end services in the realm of luxury interiors. We pride ourselves on our unmatched aesthetic and attention to detail, which we bring in at every stage – from planning to handovers.
We take on a select number of clients; we see ourselves as your partners right from the beginning and craft all our projects from scratch.
We focus on quality, and excellent ‘design service’, as being the
cornerstone of our practice.
we  work with highly qualified and selective suppliers and contractors to ensure the best quality, fit and finish for all projects.` 
   return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:flex md:items-center md:space-x-8">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <Image
            src="/images/logo.jpg"
            alt="Interior Design"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 w-full text-gray-800">
          <p className="text-sm text-yellow-500 uppercase mb-2">/ Welcome to The Design Den</p>
          <h2 className="text-4xl font-bold mb-4">Stylish Designs, Innovative Ideas</h2>
          <p className="text-lg mb-6">
          {aboutUsText}
          </p>
        </div>
      </div>
    </section>
  );
}
