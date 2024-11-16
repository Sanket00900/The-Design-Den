import Image from 'next/image';

export default function HomePage() {
  const subtitleText = `Each project that we undertake has a story to tell. One that is actualised by our expertise, aesthetics, and attention to detail.`
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-opacity-10 bg-gray-900 text-white text-center">
      <Image src="/images/main.jpg" alt="Interior Design Background" layout="fill" objectFit="cover" className="opacity-30" />
      <div className="relative max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">THE DESIGN DEN</h1>
        <h2 className="text-3xl font-light mb-6">Interior Design Firm</h2>
        <p className="text-lg mb-8">{subtitleText}</p>
        <a href="#projects" className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition">VIEW PORTFOLIO</a>
      </div>
    </section>
  );
}
