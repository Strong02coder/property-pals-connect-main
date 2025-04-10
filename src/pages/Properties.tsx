
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyGrid from '@/components/property/PropertyGrid';
import PropertySearch from '@/components/property/PropertySearch';
import { getProperties, Property } from '@/data/properties';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Properties = () => {
  const location = useLocation();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load properties
    const allProperties = getProperties();
    setProperties(allProperties);
    setFilteredProperties(allProperties);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Parse query parameters
    const params = new URLSearchParams(location.search);
    if (params.toString()) {
      filterProperties(params);
    } else {
      setFilteredProperties(properties);
    }
  }, [location.search, properties]);

  const filterProperties = (params: URLSearchParams) => {
    let filtered = [...properties];
    
    // Apply filters based on URL parameters
    const location = params.get('location');
    const type = params.get('type');
    const status = params.get('status');
    const minPrice = params.get('minPrice');
    const maxPrice = params.get('maxPrice');
    const bedrooms = params.get('bedrooms');
    const bathrooms = params.get('bathrooms');
    
    if (location) {
      filtered = filtered.filter(property => 
        property.location.address.toLowerCase().includes(location.toLowerCase()) ||
        property.location.city.toLowerCase().includes(location.toLowerCase()) ||
        property.location.state.toLowerCase().includes(location.toLowerCase()) ||
        property.location.zip.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (type && type !== 'any') {
      filtered = filtered.filter(property => 
        property.features.propertyType === type
      );
    }
    
    if (status) {
      filtered = filtered.filter(property => 
        property.features.status === status
      );
    }
    
    if (minPrice) {
      filtered = filtered.filter(property => 
        property.price >= parseFloat(minPrice)
      );
    }
    
    if (maxPrice) {
      filtered = filtered.filter(property => 
        property.price <= parseFloat(maxPrice)
      );
    }
    
    if (bedrooms && bedrooms !== 'any') {
      filtered = filtered.filter(property => 
        property.features.bedrooms >= parseInt(bedrooms)
      );
    }
    
    if (bathrooms && bathrooms !== 'any') {
      filtered = filtered.filter(property => 
        property.features.bathrooms >= parseFloat(bathrooms)
      );
    }
    
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Properties</h1>
            <p className="text-gray-600">
              Browse our extensive collection of properties for sale and rent
            </p>
          </div>
          
          <div className="mb-8">
            <PropertySearch />
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-lg text-gray-600">Loading properties...</p>
            </div>
          ) : filteredProperties.length > 0 ? (
            <PropertyGrid 
              properties={filteredProperties} 
              title={`${filteredProperties.length} Properties Found`}
            />
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Properties Found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria to find more properties.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
