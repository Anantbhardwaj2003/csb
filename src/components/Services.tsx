/*import React from 'react';*/
/*import { Heart, Brain, Stethoscope, Baby, Bone, Eye } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert care for neurological conditions with cutting-edge technology.',
    },
    {
      icon: Stethoscope,
      title: 'Primary Care',
      description: 'Regular check-ups and preventive care for your overall health.',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for children from newborns to adolescents.',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Treatment for bone and joint conditions with modern techniques.',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs
            with state-of-the-art facilities and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/
/*import { useEffect } from 'react';*/
import { Heart, Brain, Stethoscope, Baby, Bone, Eye } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert care for neurological conditions with cutting-edge technology.',
    },
    {
      icon: Stethoscope,
      title: 'Primary Care',
      description: 'Regular check-ups and preventive care for your overall health.',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for children from newborns to adolescents.',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Treatment for bone and joint conditions with modern techniques.',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs
            with state-of-the-art facilities and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
