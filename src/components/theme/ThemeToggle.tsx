
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Component, withHooks } from '@/components/base/Component';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export class ThemeToggle extends Component<ThemeToggleProps> {
  private handleToggle = () => {
    this.props.toggleTheme();
  };
  
  protected renderContent() {
    const { theme } = this.props;
    
    return (
      <div className="flex items-center gap-2 bg-estate-dark/60 p-2 rounded-full backdrop-blur-sm border border-estate-primary/30">
        <Sun size={18} className="text-estate-primary" />
        <Switch 
          checked={theme === 'dark'} 
          onCheckedChange={this.handleToggle} 
          className="data-[state=checked]:bg-estate-primary data-[state=unchecked]:bg-gray-500"
        />
        <Moon size={18} className="text-white" />
      </div>
    );
  }
}

// Connect the component to theme context using HOC pattern
export default withHooks(
  ThemeToggle,
  () => {
    const { theme, toggleTheme } = useTheme();
    return { theme, toggleTheme };
  }
);
