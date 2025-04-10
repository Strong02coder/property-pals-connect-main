
import React from 'react';
import { CheckCircle, Users, Award, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '3,500+', label: 'Properties Sold' },
  { value: '500+', label: 'Happy Clients' },
  { value: '85+', label: 'Expert Agents' },
];

const milestones = [
  {
    year: 2008,
    title: 'Founded in Property City',
    description: 'PropertyPals was established with a vision to revolutionize the real estate industry with a client-first approach.',
  },
  {
    year: 2012,
    title: 'Expanded to Regional Markets',
    description: 'After initial success, we expanded our operations to five major cities in the region.',
  },
  {
    year: 2015,
    title: 'Launched Online Platform',
    description: 'We introduced our digital platform, making it easier for clients to browse properties and connect with agents online.',
  },
  {
    year: 2018,
    title: 'Won Industry Excellence Award',
    description: 'Our commitment to quality service was recognized with the prestigious Real Estate Excellence Award.',
  },
  {
    year: 2020,
    title: 'Survived Global Challenges',
    description: 'Despite global economic challenges, we adapted quickly to the changing market conditions and continued to grow.',
  },
  {
    year: 2023,
    title: 'Adopted Advanced Technologies',
    description: 'We integrated AI and VR technologies to enhance property viewings and client matching processes.',
  },
];

const values = [
  {
    title: 'Client-Focused Approach',
    description: "We put our clients' needs first, ensuring they find properties that truly match their requirements and preferences.",
    icon: Users,
  },
  {
    title: 'Integrity & Transparency',
    description: 'We believe in honest communication and full transparency throughout the property buying, selling, or renting process.',
    icon: CheckCircle,
  },
  {
    title: 'Excellence in Service',
    description: 'We strive for excellence in everything we do, from property listings to client communications and negotiations.',
    icon: Award,
  },
  {
    title: 'Timely & Efficient',
    description: 'We value your time and work efficiently to ensure a smooth and timely transaction process.',
    icon: Clock,
  },
];

const About = () => {
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
                Our Story
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About PropertyPals</h1>
              <p className="text-xl text-gray-300 mb-8">
                We're more than just a real estate company. We're a dedicated team passionate about connecting people with properties that feel like home.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <section className="py-20 bg-gradient-to-b from-estate-black to-estate-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-estate-primary text-estate-dark px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4 inline-block">
                  Our Mission
                </span>
                <h2 className="text-4xl font-bold text-white mb-6">Creating Perfect Property Matches Since 2008</h2>
                <p className="text-gray-300 mb-6">
                  At PropertyPals, we believe that finding the right property is about more than just square footage and location—it's about finding a space where memories will be made and futures will unfold.
                </p>
                <p className="text-gray-300 mb-8">
                  Our mission is to simplify the real estate process by combining industry expertise with innovative technology, ensuring every client finds a property that truly meets their needs and aspirations.
                </p>
                
                <div className="bg-estate-black p-6 rounded-lg border border-estate-primary/30 shadow-xl mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Our Promise To You</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-estate-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Personalized service tailored to your unique needs</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-estate-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Honest guidance throughout the entire process</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-estate-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Access to exclusive listings and market insights</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-estate-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Support beyond the transaction closing</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="bg-estate-primary text-estate-dark hover:bg-estate-yellow-dark px-6 py-3 text-lg flex items-center gap-2">
                  <span>Meet Our Team</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="h-80 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1592595896616-c37162298647?w=500&q=80" 
                    alt="Modern office building" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-80 rounded-lg overflow-hidden mt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1582653291997-079b4f84bb5f?w=500&q=80" 
                    alt="Real estate team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-80 rounded-lg overflow-hidden -mt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80" 
                    alt="Property handover" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-80 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80" 
                    alt="Luxury home" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-estate-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-4xl md:text-5xl font-bold text-estate-dark mb-2">{stat.value}</div>
                  <div className="text-estate-dark/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-20 bg-estate-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="bg-estate-primary text-estate-dark px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4 inline-block">
                Our Journey
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">Key Milestones</h2>
              <div className="h-1 w-20 bg-estate-primary mx-auto"></div>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-estate-primary/30"></div>
              
              {/* Timeline Items */}
              <div className="relative">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`mb-12 flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2 px-8">
                      <div className={`text-right ${index % 2 === 0 ? 'text-left' : ''}`}>
                        <div className="bg-estate-primary text-estate-dark inline-block px-3 py-1 rounded-full text-sm font-bold mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-estate-primary border-4 border-estate-dark"></div>
                    </div>
                    
                    <div className="w-1/2 px-8">
                      {/* Empty div for spacing */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-estate-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="bg-estate-primary text-estate-dark px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4 inline-block">
                Our Values
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">What Drives Us Every Day</h2>
              <div className="h-1 w-20 bg-estate-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                At PropertyPals, our core values guide every decision we make and shape how we interact with our clients, partners, and communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-estate-dark rounded-lg p-6 border border-estate-primary/30 shadow-xl text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-estate-primary/10 p-4 rounded-full">
                      <value.icon className="h-10 w-10 text-estate-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-estate-black to-estate-dark">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-estate-dark to-estate-black border border-estate-primary/30 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Property?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Let our team of experienced real estate professionals guide you through the process of finding your dream property.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-estate-primary text-estate-dark hover:bg-estate-yellow-dark px-8 py-3 text-lg">
                    Browse Properties
                  </Button>
                  <Button variant="outline" className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-estate-dark px-8 py-3 text-lg">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
