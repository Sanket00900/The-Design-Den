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
        <div className="grid gap-8 md:grid-cols-3 grid-cols-1">
          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
            <FaPaintBrush className="text-5xl text-gray-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-center text-yellow-500">Interior Design</h3>
            <p className="text-gray-600 text-center">
              Transform your spaces with innovative and stylish interior design
              solutions tailored to your tastes.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
            <FaCouch className="text-5xl text-gray-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-center text-yellow-500">Furniture Selection</h3>
            <p className="text-gray-600 text-center">
              We provide expert furniture selection to create comfortable and
              aesthetically pleasing spaces.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
            <FaRulerCombined className="text-5xl text-gray-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-center text-yellow-500">Space Planning</h3>
            <p className="text-gray-600 text-center">
              Optimize your spaces with professional space planning for
              functionality and flow.
            </p>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Our Process
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:justify-between relative md:gap-[3rem]">
            {[
              {
                icon: <FaSearch className="text-4xl text-yellow-500" />,
                title: "Briefing",
                description:
                  "We begin with an exhaustive questionnaire to fully understand the client's needs and expectations.",
              },
              {
                icon: <FaDraftingCompass className="text-4xl text-yellow-500" />,
                title: "Design",
                description:
                  "Translatin the brief into the blueprint of what is to come. From moodboards to models, we design every last detail",
              },
              {
                icon: <FaTools className="text-4xl text-yellow-500" />,
                title: "Execution",
                description:
                  "Bringing designs to life with end-to-end execution, from structural planning to decor.",
              }, {
                icon: <FaHandHolding className="text-4xl text-yellow-500" />,
                title: "Handover",
                description:"The most anticipated moment, where we hand our clients the keys to their new space, all ready to move in",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center w-full md:w-1/3 mb-8 md:mb-0"
              >
                {/* Icon */}
                <div className="w-16 h-16  rounded-full flex items-center justify-center shadow-md">
                  {step.icon}
                </div>

                {/* Line Connector */}
                {/* {index < 2 && (
                  <div
                    className={`hidden md:block w-1 h-8 bg-yellow-500 absolute left-1/2 transform -translate-x-1/2 -bottom-8`}
                  ></div>
                )} */}

                {/* Title */}
                <h3 className="text-lg font-bold mt-4 text-yellow-500 uppercase">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
