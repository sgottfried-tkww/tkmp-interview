import { displayErrorWrapper } from '@tkmp-interview/util';
import React, { useEffect, useState } from 'react';
import cookieService from '../../services/cookie';
import Button from './button';

const Consent = (props) => {
  const { isConsent, cookieListener } = props;
  const [isShown, setIsShown] = useState(false);

  useEffect(
    () => {
      if (isConsent === null) {
        setIsShown(true);
      }
    },
    [],
  );

  const handleClick = (value) => {
    cookieService.write('consent', value, cookieListener);
    setIsShown(false);
  };

  const containerClassName = `consent-container ${isShown ? '' : 'consent-container-hidden'}`;

  if (isConsent !== null) {
    return null;
  }

  return (
    <div className={containerClassName}>
      <div className="consent-message">
        Do you want to allow cookies?
      </div>
      <div className="consent-button-container">
        <Button buttonType="confirm" onClick={handleClick} />
        <Button buttonType="reject" onClick={handleClick} />
      </div>
    </div>
  );
};

export default displayErrorWrapper(Consent);
