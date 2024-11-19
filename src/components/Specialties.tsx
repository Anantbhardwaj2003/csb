import { Brain, Heart, Syringe, Bone, Stethoscope } from 'lucide-react';

function Specialties() {
  const specialties = [
    { icon: Brain, title: 'Neurology' },
    { icon: Heart, title: 'Cardiology' },
    { icon: Syringe, title: 'Radiology' },
    { icon: Bone, title: 'Orthopedics' },
    { icon: Stethoscope, title: 'General Medicine' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Specialties</h2>
        <p className="text-lg text-gray-600 mt-2">Expert care across a range of medical specialties</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="flex items-center p-6 bg-white rounded-lg shadow-md border hover:shadow-lg transition-all cursor-pointer"
          >
            <specialty.icon className="w-10 h-10 text-blue-500 mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">{specialty.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specialties;
