import React from 'react';

import { NearlendSdkContext } from './provider';

export const useNearlendSdk = () => {
    const [_isLoading, setIsLoading] = React.useState(true);
    const nearlendSdk = React.useContext(NearlendSdkContext);
    return nearlendSdk;
  };
  