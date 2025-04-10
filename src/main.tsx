
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Utility class to handle DOM rendering (Facade pattern)
class AppRenderer {
  private rootElement: HTMLElement | null;
  
  constructor(rootElementId: string) {
    this.rootElement = document.getElementById(rootElementId);
    
    if (!this.rootElement) {
      console.error(`Root element with id "${rootElementId}" not found`);
      throw new Error(`Root element with id "${rootElementId}" not found`);
    }
  }
  
  public render(component: React.ReactNode): void {
    createRoot(this.rootElement!).render(component);
  }
}

// Initialize and render the app
const renderer = new AppRenderer("root");
renderer.render(<App />);
