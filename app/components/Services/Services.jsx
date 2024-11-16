import {
  FaPaintBrush,
  FaCouch,
  FaRulerCombined,
  FaSearch,
  FaDraftingCompass,
  FaTools,
  FaHandHolding
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Our Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 grid-cols-1">
          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md bg-yellow-500">
              <FaSearch className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center text-yellow-500">3D Visualization</h3>
            <p className="text-gray-600 text-center">
              Imagine your home before you even step in! A detailed 3D walkthrough gives you a preview of your home interiors.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md bg-yellow-500">
              <FaDraftingCompass className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center text-yellow-500">Turnkey Projects</h3>
            <p className="text-gray-600 text-center">
              From conceptualization to curation to putting everything in its place, we offer complete turnkey solutions.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md bg-yellow-500">
              <FaTools className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center text-yellow-500">Execution</h3>
            <p className="text-gray-600 text-center">
              We build and execute home interiors to perfection with our team of craftsmen and supervisors.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md bg-yellow-500">
              <FaHandHolding className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center text-yellow-500">Onsite Supervision</h3>
            <p className="text-gray-600 text-center">
              Our talented team of Project Managers and Site Supervisors ensure that your Home Interiors are perfect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
