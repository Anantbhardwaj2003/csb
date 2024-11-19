/*import React from 'react';*/
/*import { Users, Building2, Award, HeartPulse } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Patients Served' },
    { icon: Building2, value: '5', label: 'Locations' },
    { icon: Award, value: '100+', label: 'Awards' },
    { icon: HeartPulse, value: '99%', label: 'Success Rate' },
  ];

  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/
/*import { useState, useEffect } from 'react';
import { Users, Building2, Award, HeartPulse } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, value: 50000, label: 'Patients Served', suffix: '+' },
    { icon: Building2, value: 5, label: 'Locations', suffix: '' },
    { icon: Award, value: 100, label: 'Awards', suffix: '+' },
    { icon: HeartPulse, value: 99, label: 'Success Rate', suffix: '%' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const incrementCounts = stats.map((stat, index) =>
      setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index && count < stat.value ? count + Math.ceil(stat.value / 100) : count
          )
        );
      }, 30)
    );

    return () => incrementCounts.forEach((interval) => clearInterval(interval));
  }, [stats]);

  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {counts[index]}
                {counts[index] >= stat.value && stat.suffix}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/
/*import { useState, useEffect } from 'react';
import { Users, Building2, Award, HeartPulse } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, value: 50000, label: 'Patients Served', suffix: '+' },
    { icon: Building2, value: 5, label: 'Locations', suffix: '' },
    { icon: Award, value: 100, label: 'Awards', suffix: '+' },
    { icon: HeartPulse, value: 99, label: 'Success Rate', suffix: '%' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const incrementCounts = stats.map((stat, index) =>
      setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index && count < stat.value ? count + Math.ceil(stat.value / 100) : count
          )
        );
      }, 30)
    );

    return () => incrementCounts.forEach((interval) => clearInterval(interval));
  }, [stats]);

  return (
    <section className="bg-gradient-to-r from-blue-400 to-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-xl text-blue-200">A glance at our remarkable milestones</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform transition-transform duration-300 hover:scale-105 hover:bg-blue-500 rounded-xl p-6 shadow-xl bg-white/10 backdrop-blur-lg"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ease-in-out">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {counts[index]}
                {counts[index] >= stat.value && stat.suffix}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/
/*import { useState, useEffect } from 'react';
import { Users, Building2, Award, HeartPulse } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, value: 50000, label: 'Patients Served', suffix: '+' },
    { icon: Building2, value: 5, label: 'Locations', suffix: '' },
    { icon: Award, value: 100, label: 'Awards', suffix: '+' },
    { icon: HeartPulse, value: 99, label: 'Success Rate', suffix: '%' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const incrementCounts = stats.map((stat, index) =>
      setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index && count < stat.value ? count + Math.ceil(stat.value / 100) : count
          )
        );
      }, 30)
    );

    return () => incrementCounts.forEach((interval) => clearInterval(interval));
  }, [stats]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600">A glance at our remarkable milestones</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-xl p-6 shadow-lg bg-white"
            >
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ease-in-out">
                <stat.icon className="w-8 h-8 text-gray-800" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counts[index]}
                {counts[index] >= stat.value && stat.suffix}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/
import { useState, useEffect } from 'react';
import { Users, Building2, Award, HeartPulse } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, value: 50000, label: 'Patients Served', suffix: '+' },
    { icon: Building2, value: 5, label: 'Locations', suffix: '' },
    { icon: Award, value: 100, label: 'Awards', suffix: '+' },
    { icon: HeartPulse, value: 99, label: 'Success Rate', suffix: '%' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const incrementCounts = stats.map((stat, index) =>
      setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index && count < stat.value ? count + Math.ceil(stat.value / 100) : count
          )
        );
      }, 30)
    );

    return () => incrementCounts.forEach((interval) => clearInterval(interval));
  }, [stats]);

  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600">A glance at our remarkable milestones</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-xl p-6 shadow-lg bg-white/80 backdrop-blur-lg"
            >
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ease-in-out">
                <stat.icon className="w-8 h-8 text-gray-800" />
              </div>
              <div className="text-4xl font-semibold text-gray-900 mb-2">
                {counts[index]}
                {counts[index] >= stat.value && stat.suffix}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


