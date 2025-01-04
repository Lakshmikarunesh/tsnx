import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{title}</h3>
    <div className="mt-4">{children}</div>
  </div>
);