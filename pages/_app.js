import React from "react";
import "../styles/globals.css";
import Loading from "./common";
import { useBgImage } from "../ultils/useBgImage";
import { NearProvider } from "../components/utils/provider";

function MyApp({ Component, pageProps }) {
  const { isLoading } = useBgImage();

  return (
    <div style={{ position: "relative" }}>
      <NearProvider>
        <Component {...pageProps} />
      </NearProvider>
      {isLoading && <Loading />}
    </div>
  );
}

export default MyApp;
