import { displayErrorWrapper } from '@tkmp-interview/util';
import React from 'react';

const Badge = (props) => {
  if (props.assignment.name !== 'test') {
    return (
      <div className="badge-container badge-container-old">
        <div className="badge">
          Old and Flawed.
        </div>
      </div>
    );
  }

  return (
    <div className="badge-container badge-container-new">
      <div className="badge">
        New and Improved!
      </div>
    </div>
  );
};

export default displayErrorWrapper(Badge);
