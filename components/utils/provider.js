import React from "react";
import { NearlendSdk } from "./index";

const nearlendSDK = new NearlendSdk();
export const NearlendSdkContext = React.createContext(nearlendSDK);

export const NearProvider = (props) => {
  return (
    <NearlendSdkContext.Provider value={nearlendSDK}>
      {props.children}
    </NearlendSdkContext.Provider>
  );
};

export default NearProvider;
