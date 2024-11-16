import Image from 'next/image';

export default function HomePage() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-opacity-10 bg-gray-900 text-white text-center">
      <Image src="/images/main.jpg" alt="Interior Design Background" layout="fill" objectFit="cover" className="opacity-30" />
      <div className="relative max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">THE DESIGN DEN</h1>
        <h2 className="text-3xl font-light mb-6">Lets make your space a home ❤️</h2>
        <p className="text-lg mb-8">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <a href="#projects" className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition">VIEW PORTFOLIO</a>
      </div>
    </section>
  );
}
