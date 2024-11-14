import { FaPaintBrush, FaCouch, FaRulerCombined } from 'react-icons/fa';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Services</h2>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3 grid-cols-1">
          {/* Service 1 */}
          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
            <FaPaintBrush className="text-5xl text-gray-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Interior Design</h3>
            <p className="text-gray-600">
              Transform your spaces with innovative and stylish interior design solutions tailored to your tastes.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
            <FaCouch className="text-5xl text-gray-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Furniture Selection</h3>
            <p className="text-gray-600">
              We provide expert furniture selection to create comfortable and aesthetically pleasing spaces.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
            <FaRulerCombined className="text-5xl text-gray-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Space Planning</h3>
            <p className="text-gray-600">
              Optimize your spaces with professional space planning for functionality and flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
