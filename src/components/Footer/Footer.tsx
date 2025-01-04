import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">About TSNX</h3>
            <p className="mt-4 text-base text-gray-300">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {['Services', 'About', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-base text-gray-300 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              {[
                { Icon: Mail, text: 'tsnx.com@gmail.com' },
                { Icon: Phone, text: '+91 91107 81219' },
                { Icon: MapPin, text: 'Bangalore , karnataka' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-center space-x-3 text-gray-300">
                  <Icon className="h-5 w-5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/tsnx/posts/?feedView=all' },
                { Icon: Instagram, href: 'https://twitter.com' },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} TSNX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;