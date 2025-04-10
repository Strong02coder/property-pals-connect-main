
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Home, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const PropertySearch: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: '',
    type: 'any',
    status: 'for-sale',
    minPrice: '',
    maxPrice: '',
    bedrooms: 'any',
    bathrooms: 'any',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create query string from search params
    const params = new URLSearchParams();
    
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value && value !== 'any') {
        params.append(key, value);
      }
    });
    
    // Navigate to properties page with search params
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Location */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <div className="flex items-center justify-center px-3 py-2 bg-gray-100">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <Input
                type="text"
                name="location"
                value={searchParams.location}
                onChange={handleChange}
                placeholder="Enter location"
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          
          {/* Property Type */}
          <div className="col-span-1">
            <Select 
              value={searchParams.type} 
              onValueChange={(value) => handleSelectChange('type', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Type</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Status */}
          <div className="col-span-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  {searchParams.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuRadioGroup 
                  value={searchParams.status}
                  onValueChange={(value) => handleSelectChange('status', value)}
                >
                  <DropdownMenuRadioItem value="for-sale">For Sale</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="for-rent">For Rent</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Beds */}
          <div className="col-span-1">
            <Select 
              value={searchParams.bedrooms} 
              onValueChange={(value) => handleSelectChange('bedrooms', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Beds</SelectItem>
                <SelectItem value="1">1+ Beds</SelectItem>
                <SelectItem value="2">2+ Beds</SelectItem>
                <SelectItem value="3">3+ Beds</SelectItem>
                <SelectItem value="4">4+ Beds</SelectItem>
                <SelectItem value="5">5+ Beds</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Search Button */}
          <div className="col-span-1">
            <Button 
              type="submit" 
              className="w-full bg-estate-primary hover:bg-estate-secondary"
            >
              Search
            </Button>
          </div>
        </div>
        
        {/* Advanced Search (expandable) */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <Input
              type="text"
              name="minPrice"
              value={searchParams.minPrice}
              onChange={handleChange}
              placeholder="Min Price"
              className="w-full"
            />
          </div>
          <div className="col-span-1">
            <Input
              type="text"
              name="maxPrice"
              value={searchParams.maxPrice}
              onChange={handleChange}
              placeholder="Max Price"
              className="w-full"
            />
          </div>
          <div className="col-span-1">
            <Select 
              value={searchParams.bathrooms} 
              onValueChange={(value) => handleSelectChange('bathrooms', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Baths</SelectItem>
                <SelectItem value="1">1+ Baths</SelectItem>
                <SelectItem value="2">2+ Baths</SelectItem>
                <SelectItem value="3">3+ Baths</SelectItem>
                <SelectItem value="4">4+ Baths</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1">
            <Button 
              type="submit" 
              variant="outline"
              className="w-full"
            >
              Advanced Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertySearch;
