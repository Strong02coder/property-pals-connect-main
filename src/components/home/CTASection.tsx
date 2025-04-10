
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-estate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFD700\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '24px 24px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Find Your Perfect Property?</h2>
          <div className="h-1 w-20 bg-estate-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've found their dream homes with PropertyPals. Our experts are ready to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-estate-primary text-estate-dark hover:bg-estate-yellow-dark group px-6 py-6 text-lg">
              <Link to="/properties" className="flex items-center gap-2">
                Browse Properties
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 group px-6 py-6 text-lg">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
