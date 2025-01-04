import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';

const stats = [
  { label: 'Years Experience as freelancers', value: '3+', icon: Award },
  { label: 'Projects Completed', value: '20+', icon: Rocket },
  { label: 'Team Members', value: '20+', icon: Users },
  { label: 'Client Satisfaction', value: '98%', icon: Target },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Team collaboration"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Innovating Digital Solutions Since 2024
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              At TSNX, we're passionate about transforming businesses through technology. 
              Our team of experts combines creativity with technical excellence to deliver 
              solutions that drive real business growth.
            </p>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="group">
                  <div className="flex items-center space-x-3">
                    <Icon className="h-6 w-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-2xl font-bold text-gray-900">{value}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;