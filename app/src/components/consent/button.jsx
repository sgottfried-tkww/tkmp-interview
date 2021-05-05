import { displayErrorWrapper } from '@tkmp-interview/util';
import React from 'react';

const Button = (props) => {
  const { buttonType, onClick } = props;
  const buttonTypeClass = buttonType === 'confirm' ? 'consent-confirm-button' : 'consent-reject-button';

  const label = buttonType === 'confirm' ? 'Allow' : 'Deny';

  const handlClick = () => {
    onClick(buttonType === 'confirm');
  };

  return (
    <button
      onClick={handleClick}
      className={`consent-button ${buttonTypeClass}`}
    >
      {label}
    </button>
  );
};

export default displayErrorWrapper(Button);
