
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Contact = () => {
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
                Get In Touch
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-8">
                We're here to help you find your dream property. Reach out to our team of experts for personalized assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info & Form Section */}
        <section className="py-20 bg-gradient-to-b from-estate-black to-estate-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-estate-primary rounded-full p-3 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-estate-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                      <p className="text-gray-300">
                        123 Real Estate Avenue, <br />
                        Property City, PC 12345, <br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-estate-primary rounded-full p-3 flex-shrink-0">
                      <Phone className="h-6 w-6 text-estate-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-estate-primary rounded-full p-3 flex-shrink-0">
                      <Mail className="h-6 w-6 text-estate-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                      <p className="text-gray-300">info@propertypals.com</p>
                      <p className="text-gray-300">support@propertypals.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-estate-primary rounded-full p-3 flex-shrink-0">
                      <Clock className="h-6 w-6 text-estate-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Working Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-gray-300">Saturday: 10AM - 4PM</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-estate-dark p-8 rounded-lg border border-estate-primary/30 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-estate-black border border-estate-primary/30 text-white focus:border-estate-primary focus:outline-none"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-estate-black border border-estate-primary/30 text-white focus:border-estate-primary focus:outline-none"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-estate-black border border-estate-primary/30 text-white focus:border-estate-primary focus:outline-none"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-estate-black border border-estate-primary/30 text-white focus:border-estate-primary focus:outline-none min-h-[150px]"
                      placeholder="Your Message"
                    />
                  </div>
                  
                  <Button className="w-full py-3 text-lg bg-estate-primary text-estate-dark hover:bg-estate-yellow-dark flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-estate-dark">
          <div className="container mx-auto px-4">
            <div className="bg-estate-black rounded-lg overflow-hidden h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center bg-estate-dark/50">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Interactive Map Coming Soon</h3>
                  <p className="text-gray-300">
                    Our office is located in the heart of Property City, easily accessible by public transportation.
                  </p>
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

export default Contact;
