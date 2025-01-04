import React from 'react';
import PortfolioCard from './PortfolioCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Healthcare Portal',
    description: 'Secure patient management system with HIPAA compliance.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example.com',
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Real-time data visualization platform with machine learning insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['Vue.js', 'TensorFlow', 'GraphQL', 'Kubernetes'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;