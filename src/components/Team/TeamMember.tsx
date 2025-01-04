import React from 'react';
import { Linkedin, Twitter, Github ,Instagram} from 'lucide-react';

interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github'|'instagram';
  url: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  socials: SocialLink[];
}

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram:Instagram,
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, socials }) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
            {socials.map(({ platform, url }) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                >
                  <Icon className="h-5 w-5 text-gray-900" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;