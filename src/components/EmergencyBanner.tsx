/*import { useState } from 'react';
import { Phone, X } from 'lucide-react';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white py-3 relative animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="hidden sm:flex items-center">
            <Phone className="w-5 h-5 mr-2 animate-pulse" />
          </div>
          <p className="text-center font-medium">
            24/7 Emergency Service Available - Call{' '}
            <a href="tel:911" className="underline font-bold">
              911
            </a>{' '}
            for Immediate Assistance
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-red-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}*/
import { useState } from 'react';
import { Phone, X } from 'lucide-react';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white py-3 relative animate-slideIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6 mr-2 animate-pulse" />
            <p className="text-lg sm:text-xl font-semibold text-center">
              24/7 Emergency Service Available - Call{' '}
              <a href="tel:911" className="underline font-bold hover:text-yellow-400 transition-colors">
                911
              </a>{' '}
              for Immediate Assistance
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 bg-red-700 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
            aria-label="Close Emergency Banner"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
