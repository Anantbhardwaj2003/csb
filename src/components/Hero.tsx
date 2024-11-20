/*import React from 'react';*/
/*import { Activity, Calendar, Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-6xl font-bold leading-tight">
              Your Health Is Our
              <span className="gradient-text block">Top Priority</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience world-class healthcare with compassion. Our team of expert doctors
              and state-of-the-art facilities ensure you receive the best medical care.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary group">
                Book Appointment
                <ArrowRight className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <Stat icon={Activity} label="Successful Operations" value="15,000+" />
              <Stat icon={Shield} label="Years Experience" value="25+" />
              <Stat icon={Calendar} label="Daily Patients" value="500+" />
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
              alt="Modern hospital building"
              className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-scaleIn">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt={`Doctor ${i}`}
                      className="w-12 h-12 rounded-full border-2 border-white transform hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Doctors</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-3 group">
      <div className="bg-blue-100 p-3 rounded-full transform group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {value}
        </p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
}*/
/*import { Activity, Calendar, Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-radial from-blue-300/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-radial from-blue-300/20 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-5xl font-semibold leading-tight text-gray-900">
              Your Health Is Our
              <span className="text-blue-600 block">Top Priority</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Experience world-class healthcare with compassion. Our team of expert doctors
              and state-of-the-art facilities ensure you receive the best medical care.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary group">
                Book Appointment
                <ArrowRight className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8">
              <Stat icon={Activity} label="Successful Operations" value="15,000+" />
              <Stat icon={Shield} label="Years Experience" value="25+" />
              <Stat icon={Calendar} label="Daily Patients" value="500+" />
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/20 rounded-2xl blur opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
              alt="Modern hospital building"
              className="relative rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt={`Doctor ${i}`}
                      className="w-12 h-12 rounded-full border-2 border-white transform hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Doctors</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-3 group">
      <div className="bg-blue-100 p-3 rounded-full transform group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <p className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {value}
        </p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
}*/
import { Activity, Calendar, Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div
    className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage: 'url(https://www.bridgemi.com/sites/default/files/styles/full_width_image/public/hero_images/hospital.jpg?itok=s9wdM5uk)', // Add your image URL here
    }}
  >
    <div className="absolute inset-0 bg-white bg-opacity-30"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-radial from-blue-300/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-radial from-blue-300/20 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Your Health Is Our
              <span className="text-blue-900 block">Top Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-950 leading-relaxed">
              Experience world-class healthcare with compassion. Our team of expert doctors
              and state-of-the-art facilities ensure you receive the best medical care.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary group text-base md:text-lg font-medium px-6 py-3">
                Book Appointment
                <ArrowRight className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-base md:text-lg font-medium px-6 py-3">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8 text--950" >
              <Stat icon={Activity} label="Successful Operations" value="15,000+"/>
              <Stat icon={Shield} label="Years Experience" value="25+" />
              <Stat icon={Calendar} label="Daily Patients" value="500+" />
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/20 rounded-2xl blur opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt={`Doctor ${i}`}
                      className="w-12 h-12 rounded-full border-2 border-white transform hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg md:text-xl">Expert Doctors</p>
                  <p className="text-sm md:text-base text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center space-x-3 group">
      <div className="bg-blue-100 p-3 rounded-full transform group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
      </div>
      <div>
        <p className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {value}
        </p>
        <p className="text-sm md:text-base text-gray-600">{label}</p>
      </div>
    </div>
  );
}

