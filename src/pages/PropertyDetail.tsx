
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Bed,
  Bath,
  Square,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Heart,
  Share,
  Home,
  ChevronRight,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { getPropertyById, Property } from '@/data/properties';
import { formatCurrency } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (id) {
      const propertyData = getPropertyById(id);
      if (propertyData) {
        setProperty(propertyData);
        setActiveImage(propertyData.images[0]);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center h-64">
              <p className="text-lg text-gray-600">Loading property details...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
              <p className="text-gray-600 mb-8">
                The property you're looking for doesn't exist or has been removed.
              </p>
              <Button className="bg-estate-primary hover:bg-estate-secondary">
                <Link to="/properties">Browse All Properties</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-estate-primary flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/properties" className="hover:text-estate-primary">
              Properties
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="truncate max-w-xs">
              {property.title}
            </span>
          </div>

          {/* Property Header */}
          <div className="flex flex-col lg:flex-row justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-estate-primary mr-1" />
                <span className="text-gray-600">
                  {property.location.address}, {property.location.city}, {property.location.state}, {property.location.zip}
                </span>
              </div>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="text-3xl font-bold text-estate-primary mb-2">
                {formatCurrency(property.price)}
              </div>
              <Badge className={`${statusColorMap[property.features.status]}`}>
                {statusText[property.features.status]}
              </Badge>
            </div>
          </div>

          {/* Property Images */}
          <div className="mb-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px] mb-2">
              <img
                src={activeImage}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {property.images.map((image, index) => (
                <div
                  key={index}
                  className={`h-24 rounded-md overflow-hidden cursor-pointer transition border-2 ${
                    activeImage === image ? 'border-estate-primary' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    src={image}
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="details">
                <TabsList className="mb-6">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="amenities">Features & Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Property Description</h3>
                    <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Property Details</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-estate-light p-4 rounded-lg flex flex-col items-center">
                        <Bed className="h-6 w-6 text-estate-primary mb-2" />
                        <div className="text-sm text-gray-500">Bedrooms</div>
                        <div className="font-bold text-gray-900">{property.features.bedrooms}</div>
                      </div>
                      <div className="bg-estate-light p-4 rounded-lg flex flex-col items-center">
                        <Bath className="h-6 w-6 text-estate-primary mb-2" />
                        <div className="text-sm text-gray-500">Bathrooms</div>
                        <div className="font-bold text-gray-900">{property.features.bathrooms}</div>
                      </div>
                      <div className="bg-estate-light p-4 rounded-lg flex flex-col items-center">
                        <Square className="h-6 w-6 text-estate-primary mb-2" />
                        <div className="text-sm text-gray-500">Area</div>
                        <div className="font-bold text-gray-900">{property.features.area} sqft</div>
                      </div>
                      <div className="bg-estate-light p-4 rounded-lg flex flex-col items-center">
                        <Calendar className="h-6 w-6 text-estate-primary mb-2" />
                        <div className="text-sm text-gray-500">Year Built</div>
                        <div className="font-bold text-gray-900">{property.features.yearBuilt}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Property Type</span>
                        <span className="font-medium text-gray-900">
                          {property.features.propertyType.charAt(0).toUpperCase() + property.features.propertyType.slice(1)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Status</span>
                        <span className="font-medium text-gray-900">
                          {statusText[property.features.status]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Country</span>
                        <span className="font-medium text-gray-900">{property.location.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">City</span>
                        <span className="font-medium text-gray-900">{property.location.city}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">State</span>
                        <span className="font-medium text-gray-900">{property.location.state}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Zip Code</span>
                        <span className="font-medium text-gray-900">{property.location.zip}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="amenities" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Features & Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center py-2">
                          <Check className="h-5 w-5 text-estate-primary mr-2" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="location">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
                    <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-estate-primary mx-auto mb-2" />
                        <p className="text-gray-600">
                          {property.location.address}, {property.location.city}, {property.location.state}, {property.location.zip}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          {property.location.latitude && property.location.longitude ? (
                            `Coordinates: ${property.location.latitude}, ${property.location.longitude}`
                          ) : (
                            'Map data unavailable'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              {/* Agent Information */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agent</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={property.agent.image || 'https://source.unsplash.com/random/100x100/?person'}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{property.agent.name}</h4>
                    <p className="text-gray-500 text-sm">Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-estate-primary mr-2" />
                    <span className="text-gray-600">{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-estate-primary mr-2" />
                    <span className="text-gray-600">{property.agent.email}</span>
                  </div>
                </div>
                <Button className="w-full bg-estate-primary hover:bg-estate-secondary">
                  Contact Agent
                </Button>
              </div>
              
              {/* Property Actions */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Button variant="outline" className="w-full">
                    <Heart className="h-5 w-5 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share className="h-5 w-5 mr-2" />
                    Share
                  </Button>
                </div>
                <Button className="w-full bg-estate-primary hover:bg-estate-secondary">
                  Schedule a Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
