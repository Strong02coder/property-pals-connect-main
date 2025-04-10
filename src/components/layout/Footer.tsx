
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-estate-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-estate-primary">PropertyPals</h3>
            <p className="text-gray-400 mb-4">
              Connecting people with their dream properties since 2023. Our mission is to make property transactions simple, transparent, and secure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-estate-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-estate-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-estate-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-estate-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-estate-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Agents
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-estate-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-estate-primary">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/buy" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link to="/rent" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Rent Property
                </Link>
              </li>
              <li>
                <Link to="/mortgage" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Mortgage Calculation
                </Link>
              </li>
              <li>
                <Link to="/valuation" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Property Valuation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-estate-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-estate-primary" />
                <span className="text-gray-400">123 Real Estate Ave, Property City, PC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-estate-primary" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-estate-primary" />
                <span className="text-gray-400">info@propertypals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PropertyPals. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-estate-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
