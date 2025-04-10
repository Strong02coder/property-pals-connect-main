
import React from 'react';

// Base Component class for inheritance
export abstract class Component<P = {}, S = {}> extends React.Component<P, S> {
  // This method can be overridden by child classes
  protected renderContent(): React.ReactNode {
    return null;
  }
  
  render() {
    return this.renderContent();
  }
}

// HOC to convert class components to functional components if needed
export function withHooks<P>(
  ComponentClass: React.ComponentClass<P>,
  useHooks: (props: P) => any
): React.FC<P> {
  return (props: P) => {
    const hookProps = useHooks(props);
    return <ComponentClass {...props} {...hookProps} />;
  };
}
