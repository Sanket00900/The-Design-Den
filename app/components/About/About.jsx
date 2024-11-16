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
          <p className="text-sm text-yellow-500 uppercase mb-2">/ Welcome to The Design Den</p>
          <h2 className="text-4xl font-bold mb-4">Stylish Designs, Innovative Ideas</h2>
          <p className="text-lg mb-6">
          At The Deisng Den, we believe that every space tells a story — a narrative shaped by the people who inhabit it and the dreams they hold dear. Based in India, we specialize in creating bespoke interiors that blend functionality with artistry, crafting environments that are as beautiful as they are practical.

With years of experience in the interior design industry, our team of passionate designers and craftsmen takes pride in bringing your vision to life. Whether it's a modern urban apartment, a serene workspace, or a luxurious villa, we tailor every detail to reflect your unique personality and lifestyle.        </p>
          {/* <a href="#projects" className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition">
            Read More
          </a> */}
        </div>
      </div>
    </section>
  );
}
