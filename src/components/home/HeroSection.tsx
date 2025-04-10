import React from 'react';
import PropertySearch from '@/components/property/PropertySearch';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Component } from '@/components/base/Component';
import ThemeToggle from '@/components/theme/ThemeToggle';

interface HeroSectionState {
  animationComplete: boolean;
}

interface HeroSectionProps {
  theme: string;
  toggleTheme: () => void;
}

class HeroSection extends Component<HeroSectionProps, HeroSectionState> {
  constructor(props: HeroSectionProps) {
    super(props);
    this.state = {
      animationComplete: false
    };
  }
  
  componentDidMount() {
    // Simulate animation completion
    setTimeout(() => {
      this.setState({ animationComplete: true });
    }, 500);
  }
  
  private renderStatisticsItem(value: string, label: string) {
    return (
      <div className="bg-estate-dark bg-opacity-60 p-4 rounded-lg border border-estate-primary/30">
        <div className="text-estate-primary text-2xl font-bold">{value}</div>
        <div className="text-sm">{label}</div>
      </div>
    );
  }
  
  private renderHeroButtons() {
    return (
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button className="bg-estate-primary text-estate-dark hover:bg-estate-yellow-dark text-lg py-6 px-8 rounded-md shadow-lg flex items-center gap-2">
          <span>Browse Properties</span>
          <ArrowRight size={18} />
        </Button>
        
        <Button variant="outline" className="border-estate-primary text-white hover:bg-estate-primary/10 text-lg py-6 px-8 rounded-md">
          <Link to="/contact" className="flex items-center gap-2">
            <span>Contact Us</span>
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    );
  }
  
  private renderStatistics() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-white">
        {this.renderStatisticsItem("500+", "Properties")}
        {this.renderStatisticsItem("100+", "Cities")}
        {this.renderStatisticsItem("50+", "Agents")}
        {this.renderStatisticsItem("2k+", "Happy Clients")}
      </div>
    );
  }
  
  protected renderContent() {
    const { animationComplete } = this.state;
    const animationClass = animationComplete ? "animate-fade-in" : "";
    
    return (
      <div className="relative min-h-[700px] w-full overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <div className="w-full h-full relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
              alt="Real Estate"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-estate-dark bg-opacity-80" />
          </div>
        </div>
        
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle 
            theme={this.props.theme} 
            toggleTheme={this.props.toggleTheme} 
          />
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center py-20">
          <div className="max-w-3xl mb-8 animate-fade-in">
            <span className="bg-estate-primary text-estate-dark px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4 inline-block shadow-lg">
              Premium Real Estate
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your <span className="text-estate-primary">Dream</span> Property
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Discover the perfect home with our extensive selection of properties for sale and rent. Your journey to a new home begins here.
            </p>
            
            {this.renderHeroButtons()}
            {this.renderStatistics()}
          </div>
          
          {/* Search Widget */}
          <div className="w-full max-w-5xl mt-8 bg-estate-dark bg-opacity-80 p-6 rounded-xl border border-estate-primary/30 shadow-xl">
            <PropertySearch />
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
