import { displayErrorWrapper } from '@tkmp-interview/util';
import React, { Fragment, useEffect, useState } from 'react';
import cookieService from '../services/cookie';
import Consent from './consent';
import Hero from './hero';

const App = () => {
  const [isConsent, setIsConsent] = useState(null);

  useEffect(
    () => {
      const consent = cookieService.read('consent');
      const result = cookieService.valueToBoolean(consent);
      setIsConsent(result);
    },
    [],
  );

  const listener = (cookie) => {
    if (cookie.key === 'consent') {
      const result = cookieService.valueToBoolean(cookie.value);
      setIsConsent(result);
    }
  };

  return (
    <Fragment>
      <Hero />
      <Consent isConsent={isConsent} cookieListener={listener} />
    </Fragment>
  );
}

export default displayErrorWrapper(App);
