import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Patient",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      content:
        "The care I received at CSB Hospital was exceptional. The staff went above and beyond to ensure my comfort.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Patient",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      content:
        "State-of-the-art facilities and compassionate care. I couldn't have asked for better treatment.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Patient",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      content:
        "The doctors here are not only highly skilled but also take time to explain everything thoroughly.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (isHovered) return; // Pause the carousel when hovered
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 to-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from people we’ve cared for
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                      <Quote className="w-12 h-12 text-blue-100 absolute top-6 left-6" />
                      <div className="text-center relative z-10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-blue-500"
                        />
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xl text-gray-600 italic mb-6">
                          "{testimonial.content}"
                        </p>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-4 h-4 rounded-full transition-colors ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/*import { useState, useEffect } from 'react';

import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      content: 'The care I received at CSB Hospital was exceptional. The staff went above and beyond to ensure my comfort.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      content: "State-of-the-art facilities and compassionate care. I couldn't have asked for better treatment.",
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      content: 'The doctors here are not only highly skilled but also take time to explain everything thoroughly.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev + 1) % 100);
    }, 50);

    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(autoSlide);
    };
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
          <p className="text-xl text-gray-600">Hear what our patients say about their experience</p>
        </div>

        <div className="relative">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
                      <Quote className="w-12 h-12 text-blue-100 absolute top-6 left-6" />
                      <div className="text-center relative z-10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-lg"
                        />
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform"
                            />
                          ))}
                        </div>
                        <p className="text-xl text-gray-600 italic mb-6">{testimonial.content}</p>
                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-blue-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="relative mt-4 h-1 bg-gray-200 rounded-full w-full">
            <div
              style={{ width: `${progress}%` }}
              className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}*/
/*import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      content: 'The care I received at CSB Hospital was exceptional. The staff went above and beyond to ensure my comfort.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      content: "State-of-the-art facilities and compassionate care. I couldn't have asked for better treatment.",
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      content: 'The doctors here are not only highly skilled but also take time to explain everything thoroughly.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev + 1) % 100);
    }, 50);

    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(autoSlide);
    };
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
          <p className="text-xl text-gray-600">Hear what our patients say about their experience</p>
        </div>

        <div className="relative">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
                      <Quote className="w-12 h-12 text-blue-100 absolute top-6 left-6" />
                      <div className="text-center relative z-10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-lg"
                        />
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform"
                            />
                          ))}
                        </div>
                        <p className="text-xl text-gray-600 italic mb-6">{testimonial.content}</p>
                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-blue-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="relative mt-4 h-1 bg-gray-200 rounded-full w-full">
            <div
              style={{ width: `${progress}%` }}
              className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}*/
/*import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      content: 'The care I received at CSB Hospital was exceptional. The staff went above and beyond to ensure my comfort.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      content: "State-of-the-art facilities and compassionate care. I couldn't have asked for better treatment.",
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      content: 'The doctors here are not only highly skilled but also take time to explain everything thoroughly.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev + 1) % 100);
    }, 50);

    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(autoSlide);
    };
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
          <p className="text-xl text-gray-600">Hear what our patients say about their experience</p>
        </div>

        <div className="relative">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-3xl mx-auto">
                    <motion.div
                      className="bg-white rounded-2xl shadow-2xl p-8 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <Quote className="w-12 h-12 text-blue-100 absolute top-6 left-6" />
                      <div className="text-center relative z-10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-lg"
                        />
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform"
                            />
                          ))}
                        </div>
                        <p className="text-xl text-gray-600 italic mb-6">{testimonial.content}</p>
                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-white">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="relative mt-4 h-1 bg-gray-200 rounded-full w-full">
            <div
              style={{ width: `${progress}%` }}
              className="absolute top-0 left-0 h-1 bg-white rounded-full transition-all"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}*/

