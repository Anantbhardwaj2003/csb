import { BookOpen, Activity, CreditCard, HeartPulse, ChevronRight } from "lucide-react";

function HealthResources() {
  const resources = [
    {
      icon: BookOpen,
      label: "Health Articles",
      description: "Read articles on wellness, nutrition, and prevention.",
      color: "from-indigo-500 to-indigo-700",
      onClick: () => window.open("https://www.everydayhealth.com/", "_blank"),
    },
    {
      icon: Activity,
      label: "Symptom Checker",
      description: "Analyze symptoms and get guidance on what to do next.",
      color: "from-teal-500 to-teal-700",
      onClick: () =>
        window.open("https://www.medifind.com/symptom-checker", "_blank"),
    },
    {
      icon: CreditCard,
      label: "Insurance Information",
      description: "Find details about accepted insurance plans.",
      color: "from-amber-500 to-amber-700",
      onClick: () =>
        window.open(
          "https://www.starhealth.in/lp/health-insurance/",
          "_blank"
        ),
    },
    {
      icon: HeartPulse,
      label: "Health Calculators",
      description: "Use our tools to calculate BMI, heart rate, and more.",
      color: "from-pink-500 to-pink-700",
      onClick: () =>
        window.open("https://www.gigacalculator.com/calculators/health/", "_blank"),
    },
  ];

  return (
    <div
      className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/blurred-hospital-clinic-backdrop-offers-glimpse-medical-activities-dynamic-nature_896558-3677.jpg)",
      }}
    >

      <div className="relative text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-800">
          Health Resources
        </h2>
        <p className="text-xl text-gray-900 mt-4">
          Your guide to staying informed and healthy
        </p>
      </div>

      {/* Resource Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resources.map((resource, index) => (
          <button
            key={index}
            onClick={resource.onClick}
            className={`relative group bg-gradient-to-br ${resource.color} p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl text-white`}
            aria-label={resource.label}
          >
            {/* Icon */}
            <div className="flex items-center space-x-4 mb-3">
              <resource.icon className="w-12 h-12 text-white opacity-90" />
            </div>

            {/* Title & Description */}
            <h3 className="font-semibold text-xl mb-2 group-hover:underline">
              {resource.label}
            </h3>
            <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-200">
              {resource.description}
            </p>

            {/* Chevron for Action */}
            <ChevronRight className="absolute bottom-4 right-4 w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default HealthResources;
