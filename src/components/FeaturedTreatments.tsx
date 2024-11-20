import { Stethoscope, HeartPulse, Brain, Accessibility } from "lucide-react";

function FeaturedTreatments() {
  const treatments = [
    {
      icon: Stethoscope,
      title: "General Checkups",
      description: "Comprehensive health checkups to assess overall well-being.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: HeartPulse,
      title: "Cardiology",
      description: "Advanced cardiac care including diagnostics and treatments.",
      color: "from-red-400 to-red-600",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized care for neurological conditions and brain health.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Accessibility,
      title: "Orthopedics",
      description:
        "Bone and joint care, from injuries to joint replacement surgeries.",
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url('https://static01.nyt.com/images/2020/10/19/well/well-hospital-chen/well-hospital-chen-superJumbo.jpg?quality=90&auto=webp')`,
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black">
            Featured Treatments
          </h2>
          <p className="text-lg text-gray-900 mt-3">
            Specialized care tailored for your health needs
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${treatment.color} text-white`}
            >
              <treatment.icon className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold">{treatment.title}</h3>
              <p className="mt-2 text-sm opacity-90">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedTreatments;
