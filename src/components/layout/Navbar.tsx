
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, User, Menu, Home, Building, Users, Info, Phone } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-estate-dark text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-estate-primary">PropertyPals</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-1">
            <Home size={16} />
            <span>Home</span>
          </Link>
          <Link to="/properties" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-1">
            <Building size={16} />
            <span>Properties</span>
          </Link>
          <Link to="/agents" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-1">
            <Users size={16} />
            <span>Agents</span>
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-1">
            <Info size={16} />
            <span>About</span>
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-1">
            <Phone size={16} />
            <span>Contact</span>
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="icon" className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-estate-dark">
            <Search className="h-4 w-4" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-estate-dark">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-estate-dark border border-estate-primary">
              <DropdownMenuItem asChild className="hover:bg-estate-primary/10 text-white">
                <Link to="/login" className="w-full">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-estate-primary/10 text-white">
                <Link to="/register" className="w-full">Register</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="bg-estate-primary text-estate-dark hover:bg-estate-yellow-dark">
            <Link to="/add-property">Add Property</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-estate-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-estate-dark border-t border-estate-primary/30 animate-fade-in">
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link to="/" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-2">
              <Home size={16} />
              <span>Home</span>
            </Link>
            <Link to="/properties" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-2">
              <Building size={16} />
              <span>Properties</span>
            </Link>
            <Link to="/agents" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-2">
              <Users size={16} />
              <span>Agents</span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-2">
              <Info size={16} />
              <span>About</span>
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-estate-primary transition-colors flex items-center gap-2">
              <Phone size={16} />
              <span>Contact</span>
            </Link>
            <div className="flex space-x-4 pt-2 border-t border-estate-primary/30">
              <Button variant="outline" size="sm" className="flex-1 border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-estate-dark">
                <Link to="/login" className="w-full">Login</Link>
              </Button>
              <Button className="flex-1 bg-estate-primary text-estate-dark hover:bg-estate-yellow-dark">
                <Link to="/register" className="w-full">Register</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
