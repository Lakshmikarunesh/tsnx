import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Harsha Vardhan',
    role: 'Founder & CEO',
    image: 'https://res.cloudinary.com/dmip7daqc/image/upload/v1735998501/1735153857902_fzonpz.jpg',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/harsha-vardhan-yadla-4a1161295' },
      { platform: 'instagram', url: '' },
    ],
  },
  {
    name: 'Eswar',
    role: 'Co-founder ',
    image: 'https://res.cloudinary.com/dmip7daqc/image/upload/v1735998501/1732082951667_elad5v.jpg',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/eswar-narayana-khande' },
      { platform: 'instagram', url: 'https://github.com' },
    ],
  },
  {
    name: 'Lakshmi karunesh',
    role: 'COO & Develoer',
    image: 'https://res.cloudinary.com/dmip7daqc/image/upload/v1732889735/new_wdlcmq.jpg',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/lakshmi-karunesh-r-51388b226' },
      { platform: 'instagram', url: 'https://twitter.com' },
    ],
  },
  {
    name: 'Rohindth',
    role: 'CTO',
    image: 'https://res.cloudinary.com/dmip7daqc/image/upload/v1735998501/1735643745080_dcoqlo.jpg',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/rohindth8' },
      { platform: 'instagram', url: 'https://github.com' },
    ],
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Talented individuals working together to create exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;