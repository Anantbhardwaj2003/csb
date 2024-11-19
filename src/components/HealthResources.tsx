import { BookOpen, Activity, CreditCard, HeartPulse } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function HealthResources() {
  const resources = [
    {
      icon: BookOpen,
      label: 'Health Articles',
      description: 'Read articles on wellness, nutrition, and prevention.',
      color: 'from-indigo-500 to-indigo-700',
      onClick: () => window.open('https://www.everydayhealth.com/', '_blank'),
    },
    {
      icon: Activity,
      label: 'Symptom Checker',
      description: 'Analyze symptoms and get guidance on what to do next.',
      color: 'from-teal-500 to-teal-700',
      onClick: () => window.open('https://www.medifind.com/symptom-checker', '_blank'),
    },
    {
      icon: CreditCard,
      label: 'Insurance Information',
      description: 'Find details about accepted insurance plans.',
      color: 'from-amber-500 to-amber-700',
      onClick: () => window.open('https://www.starhealth.in/lp/health-insurance/?utm_source=bing&utm_campaign=GS_Generic_Pan_India&utm_agid=1346904145606303&utm_term=affordable%20health%20insurance&creative=&device=c&msclkid=d2de67ec42b91f185b3800d9c8120696', '_blank'),
    },
    {
      icon: HeartPulse,
      label: 'Health Calculators',
      description: 'Use our tools to calculate BMI, heart rate, and more.',
      color: 'from-pink-500 to-pink-700',
      onClick: () => window.open('https://www.gigacalculator.com/calculators/health/', '_blank'),
    },
  ];

  return (
    <div
      //className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-cover bg-center bg-no-repeat relative"
      className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/premium-photo/blurred-hospital-clinic-backdrop-offers-glimpse-medical-activities-dynamic-nature_896558-3677.jpg)',
      }}
    >
      {/* Optional Dim Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>

      <div className="relative text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Health Resources</h2>
        <p className="text-lg text-gray-900 mt-2">Your guide to staying informed and healthy</p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <button
            key={index}
            onClick={resource.onClick}
            className={`bg-gradient-to-br ${resource.color} p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl flex flex-col items-start text-white`}
            aria-label={resource.label}
          >
            <div className="flex items-center space-x-4">
              <resource.icon className="w-10 h-10 text-white opacity-90 mb-3" />
            </div>
            <h3 className="font-semibold text-xl mb-2">{resource.label}</h3>
            <p className="text-sm opacity-80">{resource.description}</p>
            <ChevronRight className="w-6 h-6 opacity-80 mt-3" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default HealthResources;