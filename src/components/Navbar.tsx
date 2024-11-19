/*import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Phone, Clock, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Emergency: (555) 123-4567</span>
              </div>
              <div className="hidden md:flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>24/7 Available</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Healthcare Ave, Medical City</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-white/80 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                CSB Hospital
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="#home" isActive>Home</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#doctors">Doctors</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="ml-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Book Appointment
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <MobileNavLink href="#home" isActive>Home</MobileNavLink>
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#doctors">Doctors</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) {
  return (
    <a
      href={href}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) {
  return (
    <a
      href={href}
      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </a>
  );
}*/
/*import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Phone, Clock, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Emergency: (555) 123-4567</span>
              </div>
              <div className="hidden md:flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>24/7 Available</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Healthcare Ave, Medical City</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                CSB Hospital
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="#home" isActive>
                Home
              </NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#doctors">Doctors</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="ml-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Book Appointment
              </button>
            </div>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <MobileNavLink href="#home" isActive>
              Home
            </MobileNavLink>
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#doctors">Doctors</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) {
  return (
    <a
      href={href}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) {
  return (
    <a
      href={href}
      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </a>
  );
}*/

/*import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Phone, Clock, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close menu on link click
  };

  return (
    <>
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6 items-center">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>Emergency: (555) 123-4567</span>
            </div>
            <div className="hidden md:flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>24/7 Available</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>123 Healthcare Ave, Medical City</span>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              CSB Hospital
            </span>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            {["home", "services", "doctors", "about", "contact"].map((section) => (
              <NavLink key={section} href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
            ))}
            <button className="ml-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-transform duration-300 transform hover:scale-105 shadow-lg">
              Book Appointment
            </button>
          </div>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-white shadow-lg px-4 pt-2 pb-3 space-y-1">
            {["home", "services", "doctors", "about", "contact"].map((section) => (
              <MobileNavLink key={section} href={`#${section}`} onClick={handleLinkClick}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </MobileNavLink>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-transform duration-300 transform hover:scale-105">
              Book Appointment
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="px-4 py-2 rounded-full text-sm font-medium transition-transform duration-300 transform hover:scale-105 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-3 rounded-lg text-base font-medium transition-transform duration-300 transform hover:scale-105 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
    >
      {children}
    </a>
  );
}*/
import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Phone, Clock, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-2 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm font-medium">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Emergency: (555) 123-4567</span>
              </div>
              <div className="hidden md:flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>24/7 Available</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Healthcare Ave, Medical City</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
                CSB Hospital
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="#home" isActive>Home</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#doctors">Doctors</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="ml-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-full hover:from-blue-700 hover:to-blue-900 transition-transform duration-300 transform hover:scale-105 shadow-md">
                Book Appointment
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-2 bg-white shadow-lg">
            <MobileNavLink href="#home" isActive>Home</MobileNavLink>
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#doctors">Doctors</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavLink({ href, children, isActive }) {
  return (
    <a
      href={href}
      className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, isActive }) {
  return (
    <a
      href={href}
      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </a>
  );
}


