import React from 'react';

interface TechIconProps {
  icon: React.FC<{ className?: string }>;
  position: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon: Icon, position }) => {
  return (
    <div className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2`}>
      <Icon className="w-8 h-8 text-indigo-600/60" />
    </div>
  );
};

export default TechIcon;