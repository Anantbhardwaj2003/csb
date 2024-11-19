/*import React, { useState } from 'react';
import { Heart, Phone, Clock, MapPin, ChevronRight, Search, Calendar, User, Activity } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import EmergencyBanner from './components/EmergencyBanner';
import AppointmentModal from './components/AppointmentModal';

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <EmergencyBanner />
      <Navbar onBookAppointment={() => setIsAppointmentModalOpen(true)} />
      <Hero onBookAppointment={() => setIsAppointmentModalOpen(true)} />
      <QuickAccess onBookAppointment={() => setIsAppointmentModalOpen(true)} />
      <Services />
      <Stats />
      <Doctors />
      <Testimonials />
      <Footer />
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  );
}

function QuickAccess({ onBookAppointment }: { onBookAppointment: () => void }) {
  const actions = [
    { icon: Calendar, label: 'Book Appointment', color: 'bg-blue-500', onClick: onBookAppointment },
    { icon: Phone, label: 'Emergency: 911', color: 'bg-red-500', onClick: () => window.location.href = 'tel:911' },
    { icon: Search, label: 'Find Doctor', color: 'bg-green-500', onClick: () => document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: User, label: 'Patient Portal', color: 'bg-purple-500', onClick: () => window.open('#', '_blank') },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`${action.color} p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 flex items-center justify-between text-white`}
          >
            <div className="flex items-center space-x-4">
              <action.icon className="w-6 h-6" />
              <span className="font-semibold">{action.label}</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;*/
import React, { useState } from 'react';
import { Heart, Phone, Clock, MapPin, ChevronRight, Search, Calendar, User, Activity } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import EmergencyBanner from './components/EmergencyBanner';
import AppointmentModal from './components/AppointmentModal';
import HealthResources from './components/HealthResources';
import FeaturedTreatments from './components/FeaturedTreatments';
import Specialties from './components/Specialties';
import NewsUpdates from './components/NewsUpdates';
import FAQ from './components/FAQ';

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <EmergencyBanner />
      <Navbar onBookAppointment={() => setIsAppointmentModalOpen(true)} />
      <Hero onBookAppointment={() => setIsAppointmentModalOpen(true)} />
      <QuickAccess onBookAppointment={() => setIsAppointmentModalOpen(true)} />
      <Services />
      <HealthResources />
      <FeaturedTreatments />
      <Stats />
      <Doctors />
      <Testimonials />
      <Footer />
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  );
}

/*function QuickAccess({ onBookAppointment }: { onBookAppointment: () => void }) {
  const actions = [
    { icon: Calendar, label: 'Book Appointment', color: 'bg-blue-500', onClick: onBookAppointment },
    { icon: Phone, label: 'Emergency: 911', color: 'bg-red-500', onClick: () => window.location.href = 'tel:911' },
    { icon: Search, label: 'Find Doctor', color: 'bg-green-500', onClick: () => document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: User, label: 'Patient Portal', color: 'bg-purple-500', onClick: () => window.open('#', '_blank') },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`${action.color} p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 flex items-center justify-between text-white`}
            aria-label={action.label}
          >
            <div className="flex items-center space-x-4">
              <action.icon className="w-6 h-6" />
              <span className="font-semibold text-lg">{action.label}</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}*/
function QuickAccess({ onBookAppointment }) {
  const actions = [
    { icon: Calendar, label: 'Book Appointment', color: 'from-blue-500 to-blue-700', onClick: onBookAppointment },
    { icon: Phone, label: 'Emergency: 911', color: 'from-red-500 to-red-700', onClick: () => window.location.href = 'tel:911' },
    { icon: Search, label: 'Find Doctor', color: 'from-green-500 to-green-700', onClick: () => document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: User, label: 'Patient Portal', color: 'from-purple-500 to-purple-700', onClick: () => window.open('#', '_blank') },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`bg-gradient-to-br ${action.color} p-5 rounded-3xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-between text-white`}
            aria-label={action.label}
          >
            <div className="flex items-center space-x-4">
              <action.icon className="w-6 h-6 text-white opacity-90 transition-transform duration-200" />
              <span className="font-semibold text-lg tracking-wide">{action.label}</span>
            </div>
            <ChevronRight className="w-6 h-6 opacity-80" />
          </button>
        ))}
      </div>
    </div>
  );
}


export default App;
