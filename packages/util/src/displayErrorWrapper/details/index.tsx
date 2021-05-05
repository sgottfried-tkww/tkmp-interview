import React, { ErrorInfo, FunctionComponent, MouseEvent, useEffect, useRef } from 'react';
import { prepareCallStack, prepareComponentStack } from '../utils';
import Detail from './detail';

interface DetailsProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  closeDetails(): void;
}

const Details: FunctionComponent<DetailsProps> = (props) => {
  const { error, errorInfo, closeDetails } = props
  const overlayRef = useRef(null);

  const callStack = prepareCallStack(error);
  const componentStack = prepareComponentStack(errorInfo);

  useEffect(
    () => {
      window.addEventListener('keydown', keyDown);

      return () => {
        window.removeEventListener('keydown', keyDown);
      }
    },
    [],
  );

  const keyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeDetails();
    }
  };

  const clickOverlay = (event: MouseEvent<HTMLDivElement>) => {
    if (overlayRef.current && event.target === overlayRef.current) {
      clickClose(event);
    }
  };

  const clickClose = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    closeDetails();
  }

  return (
    <div ref={overlayRef} className="error-details-overlay" onClick={clickOverlay}>
      <div className="error-details-container">
        <div className="error-details-close" onClick={clickClose}>
          X
        </div>
        <div className="error-details-title">
          {error?.message || 'An Error Ocurred'}
        </div>
        <div className="error-details-content">
          <Detail stack={componentStack} name="Component" />
          {callStack.length > 0 &&
            <Detail stack={callStack} name="Call" />
          }
        </div>
      </div>
    </div >
  );
};

export default Details;
