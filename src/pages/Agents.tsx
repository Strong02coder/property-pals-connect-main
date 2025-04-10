
import React from 'react';
import { MapPin, Mail, Phone, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const agentsData = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Senior Property Consultant',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&q=80',
    location: 'Downtown Office',
    email: 'emma.t@propertypals.com',
    phone: '+1 (555) 234-5678',
    bio: 'Emma specializes in luxury residential properties and has over 10 years of experience in the real estate market. Her expertise in property valuation and negotiation has helped hundreds of clients find their dream homes.',
    properties: 42,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Commercial Property Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80',
    location: 'Business District Office',
    email: 'michael.r@propertypals.com',
    phone: '+1 (555) 345-6789',
    bio: 'Michael is our leading commercial property specialist with expertise in office spaces, retail locations, and industrial properties. His strategic approach helps businesses find the perfect location for their operations.',
    properties: 38,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Residential Sales Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&q=80',
    location: 'Suburban Office',
    email: 'sarah.j@propertypals.com',
    phone: '+1 (555) 456-7890',
    bio: 'Sarah focuses on family homes in suburban areas. She has helped countless families upgrade to larger homes or find their first property. Her attentive listening skills ensure clients find exactly what they\'re looking for.',
    properties: 56,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Investment Property Advisor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80',
    location: 'Financial District Office',
    email: 'david.c@propertypals.com',
    phone: '+1 (555) 567-8901',
    bio: 'David specializes in investment properties and portfolio management. His background in finance helps clients maximize returns on their real estate investments while minimizing risks.',
    properties: 67,
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    role: 'Luxury Estate Agent',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80',
    location: 'Coastal Properties Office',
    email: 'olivia.m@propertypals.com',
    phone: '+1 (555) 678-9012',
    bio: 'Olivia is our specialist in high-end waterfront and coastal properties. Her attention to detail and extensive network makes her the go-to agent for exclusive listings in premium locations.',
    properties: 29,
    rating: 4.8,
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'First-Time Buyer Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80',
    location: 'Central Office',
    email: 'james.w@propertypals.com',
    phone: '+1 (555) 789-0123',
    bio: 'James specializes in helping first-time buyers navigate the real estate market. His patient approach and educational background ensure clients understand every step of the home buying process.',
    properties: 45,
    rating: 4.7,
  },
];

const Agents = () => {
  return (
    <div className="min-h-screen flex flex-col bg-estate-dark">
      <Navbar />
      <main className="flex-grow">
        {/* Header Banner */}
        <div className="bg-estate-black py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-estate-black/70 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-estate-dark to-transparent z-10"></div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
              <span className="bg-estate-primary text-estate-dark px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4 inline-block">
                Our Experts
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet Our Agents</h1>
              <p className="text-xl text-gray-300 mb-8">
                Our team of experienced real estate professionals is dedicated to helping you find the perfect property that meets your needs and exceeds your expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Agents Grid Section */}
        <section className="py-20 bg-gradient-to-b from-estate-black to-estate-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agentsData.map((agent) => (
                <div key={agent.id} className="bg-estate-dark rounded-lg overflow-hidden border border-estate-primary/30 shadow-xl transition-transform hover:scale-[1.02]">
                  <div className="relative">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-80 object-cover object-center"
                    />
                    <div className="absolute top-4 right-4 bg-estate-primary text-estate-dark px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1 inline-block" fill="currentColor" />
                      {agent.rating}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
                    <p className="text-estate-primary font-medium mb-4">{agent.role}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-estate-primary mr-3 mt-0.5" />
                        <span className="text-gray-300">{agent.location}</span>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-estate-primary mr-3 mt-0.5" />
                        <span className="text-gray-300">{agent.email}</span>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-estate-primary mr-3 mt-0.5" />
                        <span className="text-gray-300">{agent.phone}</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-estate-primary/30 pt-4 mb-6">
                      <p className="text-gray-300 line-clamp-3">{agent.bio}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="bg-estate-black/50 px-4 py-2 rounded-full">
                        <span className="text-estate-primary font-bold">{agent.properties}</span>
                        <span className="text-gray-300 ml-1">Listings</span>
                      </div>
                      <Button className="bg-estate-primary text-estate-dark hover:bg-estate-yellow-dark flex items-center gap-1">
                        <span>View Profile</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-20 bg-estate-black">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-estate-dark to-estate-black border border-estate-primary/30 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <span className="bg-estate-primary text-estate-dark px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4 inline-block">
                  Career Opportunities
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Real Estate Team</h2>
                <p className="text-lg text-gray-300 mb-8">
                  We're always looking for talented real estate professionals to join our growing team. 
                  If you're passionate about helping people find their dream properties, we'd love to hear from you.
                </p>
                <Button className="bg-estate-primary text-estate-dark hover:bg-estate-yellow-dark px-8 py-3 text-lg">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Agents;
