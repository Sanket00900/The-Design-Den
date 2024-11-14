import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:flex md:items-center md:space-x-8">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <Image
            src="/placeholder.jpg" // Replace with actual image path
            alt="Interior Design"
            width={500}
            height={700}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 w-full text-gray-800">
          <p className="text-sm text-gray-500 uppercase mb-2">/ Welcome to The Design Den</p>
          <h2 className="text-4xl font-bold mb-4">Stylish Designs, Innovative Ideas</h2>
          <p className="text-lg mb-6">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <a href="#projects" className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
