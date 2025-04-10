
import React from 'react';
import { Home, Search, DollarSign, Users, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Wide Range of Properties',
    description: 'Browse through thousands of properties for sale and rent, from apartments to luxury homes.'
  },
  {
    icon: Search,
    title: 'Advanced Search',
    description: 'Find exactly what you\'re looking for with our powerful search and filtering options.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Clear pricing information with no hidden fees or surprises throughout the process.'
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Connect with experienced real estate agents who know the market inside and out.'
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Rest easy knowing that your personal and financial information is protected.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our customer support team is always available to answer your questions and concerns.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-estate-dark relative">
      {/* Diagonal design element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-estate-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-estate-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-estate-primary text-estate-dark px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4 inline-block">
            Our Advantages
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose PropertyPals</h2>
          <div className="h-1 w-20 bg-estate-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We provide the best real estate experience with our comprehensive services and dedication to client satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-estate-dark bg-opacity-80 p-8 rounded-lg border border-estate-primary/30 transition-all duration-300 hover:border-estate-primary hover:shadow-lg hover:shadow-estate-primary/10 hover:-translate-y-2"
            >
              <div className="bg-estate-primary/20 p-4 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-estate-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
