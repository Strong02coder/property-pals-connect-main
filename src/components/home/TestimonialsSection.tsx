
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jennifer Lawrence',
    role: 'Home Buyer',
    avatar: 'https://source.unsplash.com/random/100x100/?woman,portrait',
    content: 'Working with PropertyPals made finding my dream home a breeze. Their search tools helped me narrow down exactly what I was looking for, and the agents were incredibly knowledgeable and responsive.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Property Seller',
    avatar: 'https://source.unsplash.com/random/100x100/?man,portrait',
    content: 'I sold my house in record time thanks to PropertyPals. Their marketing strategies and professional photography made my listing stand out. The entire process was smooth and stress-free.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    role: 'Real Estate Investor',
    avatar: 'https://source.unsplash.com/random/100x100/?woman,business',
    content: 'As an investor, I need reliable data and quick responses. PropertyPals delivers on both fronts. Their market insights have helped me make informed decisions, and their platform streamlines the entire process.',
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-estate-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-estate-primary text-estate-dark px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4 inline-block">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-estate-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it — hear from some of our satisfied clients who found their dream properties with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-estate-dark p-8 rounded-lg border border-estate-primary/30 transition-all duration-300 hover:border-estate-primary hover:shadow-lg hover:shadow-estate-primary/10"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-estate-primary fill-estate-primary' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center border-t border-gray-700 pt-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-estate-primary" 
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-estate-primary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
