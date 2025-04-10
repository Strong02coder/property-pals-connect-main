
import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme strategy interface
interface ThemeStrategy {
  getInitialTheme(): string;
  saveTheme(theme: string): void;
  toggleTheme(currentTheme: string): string;
}

// Concrete implementation of the theme strategy
class BrowserThemeStrategy implements ThemeStrategy {
  getInitialTheme(): string {
    // Check localStorage first
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    
    // Check user preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  saveTheme(theme: string): void {
    localStorage.setItem('theme', theme);
    
    // Apply theme to document
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }
  
  toggleTheme(currentTheme: string): string {
    return currentTheme === 'dark' ? 'light' : 'dark';
  }
}

// Theme context and provider
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export class ThemeProvider extends React.Component<ThemeProviderProps, { theme: string }> {
  private themeStrategy: ThemeStrategy;
  
  constructor(props: ThemeProviderProps) {
    super(props);
    this.themeStrategy = new BrowserThemeStrategy();
    
    // Initialize state with default theme
    this.state = {
      theme: 'light' // Default that will be updated in componentDidMount
    };
  }
  
  componentDidMount() {
    const initialTheme = this.themeStrategy.getInitialTheme();
    this.setState({ theme: initialTheme });
    this.themeStrategy.saveTheme(initialTheme);
  }
  
  toggleTheme = () => {
    const newTheme = this.themeStrategy.toggleTheme(this.state.theme);
    this.setState({ theme: newTheme });
    this.themeStrategy.saveTheme(newTheme);
  };
  
  render() {
    const value = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme
    };
    
    return (
      <ThemeContext.Provider value={value}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// Hook for using theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
