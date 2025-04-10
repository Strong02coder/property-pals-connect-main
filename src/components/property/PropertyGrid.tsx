
import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '@/data/properties';

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  subtitle?: string;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ 
  properties, 
  title, 
  subtitle 
}) => {
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-bold text-gray-900">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
