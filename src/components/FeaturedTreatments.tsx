import { Stethoscope, HeartPulse, Brain, Accessibility } from 'lucide-react';

function FeaturedTreatments() {
  const treatments = [
    {
      icon: Stethoscope,
      title: 'General Checkups',
      description: 'Comprehensive health checkups to assess overall well-being.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: HeartPulse,
      title: 'Cardiology',
      description: 'Advanced cardiac care including diagnostics and treatments.',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Specialized care for neurological conditions and brain health.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Accessibility,
      title: 'Orthopedics',
      description: 'Bone and joint care, from injuries to joint replacement surgeries.',
      color: 'from-green-500 to-green-700',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Featured Treatments</h2>
        <p className="text-lg text-gray-600 mt-2">Specialized care tailored for your health needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${treatment.color} p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl text-white flex flex-col items-start`}
          >
            <treatment.icon className="w-10 h-10 text-white mb-3" />
            <h3 className="font-semibold text-xl mb-2">{treatment.title}</h3>
            <p className="text-sm opacity-80">{treatment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedTreatments;
