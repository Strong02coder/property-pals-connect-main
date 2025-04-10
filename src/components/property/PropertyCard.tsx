
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '@/data/properties';
import { formatCurrency } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const statusColorMap = {
    'for-sale': 'bg-estate-primary text-white',
    'for-rent': 'bg-estate-success text-white',
    'sold': 'bg-estate-error text-white',
    'pending': 'bg-estate-warning text-white',
  };

  const statusText = {
    'for-sale': 'For Sale',
    'for-rent': 'For Rent',
    'sold': 'Sold',
    'pending': 'Pending',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Property Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 left-0 m-2">
          <Badge className={`${statusColorMap[property.features.status]}`}>
            {statusText[property.features.status]}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="text-white font-bold text-xl">{formatCurrency(property.price)}</div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{property.title}</h3>
        
        <div className="flex items-center text-estate-gray mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm truncate">
            {property.location.address}, {property.location.city}, {property.location.state}
          </span>
        </div>
        
        <p className="text-estate-gray-dark text-sm line-clamp-2 mb-4">
          {property.description}
        </p>

        {/* Property Features */}
        <div className="flex justify-between border-t pt-3">
          <div className="flex items-center">
            <Bed className="h-4 w-4 text-estate-primary mr-1" />
            <span className="text-sm">{property.features.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 text-estate-primary mr-1" />
            <span className="text-sm">{property.features.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 text-estate-primary mr-1" />
            <span className="text-sm">{property.features.area} sqft</span>
          </div>
        </div>
      </div>

      {/* View Details Button */}
      <div className="px-4 pb-4">
        <Link 
          to={`/properties/${property.id}`}
          className="block w-full bg-estate-light text-estate-primary font-medium text-center py-2 rounded transition-colors hover:bg-estate-primary hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
