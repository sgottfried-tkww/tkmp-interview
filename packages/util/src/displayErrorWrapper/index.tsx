import React, { Component, ComponentType } from 'react';
import DidCatch from './didCatch';

const errorBoundary = (OriginalReactComponent: ComponentType) => {
  return class extends Component {
    render() {
      return (
        <DidCatch>
          <OriginalReactComponent {...this.props} />
        </DidCatch>
      );
    };
  };
};

export default errorBoundary;
