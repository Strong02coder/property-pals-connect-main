
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PropertyGrid from '@/components/property/PropertyGrid';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import { getFeaturedProperties } from '@/data/properties';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Component } from '@/components/base/Component';

// Page Component following OOP pattern
class Index extends Component {
  private featuredProperties = getFeaturedProperties(6);
  
  protected renderContent() {
    return (
      <div className="min-h-screen flex flex-col bg-estate-dark">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          
          <section className="py-20 bg-gradient-to-b from-estate-black to-estate-dark">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="bg-estate-primary text-estate-dark px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4 inline-block">
                  Exclusive Listings
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">Featured Properties</h2>
                <div className="h-1 w-20 bg-estate-primary mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Explore our handpicked selection of premium properties that offer luxury, comfort, and exceptional value.
                </p>
              </div>
              <PropertyGrid 
                properties={this.featuredProperties} 
                title="" 
                subtitle="" 
              />
            </div>
          </section>
          
          <FeaturesSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Index;
