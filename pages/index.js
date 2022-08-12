import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container, Wrapper } from "../components/common";
import FooterLinks from "../components/common/footerLinks";

import {
  FooterStyle,
  HeaderStyle,
  MainStyle,
} from "../components/common/styles";
import { useDiscord } from "../components/utils/useDiscord";
import { useNearlendSdk } from "../components/utils/useNearlendSdk";
import { useUpdateAccount } from "../components/utils/useUpdateAccounts";

export default function Home() {
  const ref = useRef(null);
  const nearlendSdk = useNearlendSdk();
  const [nearAccount, setNearAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const [discordUsername, discordConnect] = useDiscord();

  const { dataConnect } = useUpdateAccount(
    nearAccount,
    discordUsername?.discordName
  );

  useEffect(() => {
    setNearAccount(nearlendSdk.getNearAccount());
    setIsConnected(nearlendSdk.isLogged());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nearAccount, isConnected]);

  return (
    <Wrapper>
      <Head>
        <title>NFTsLinker</title>
        <meta name="description" content="Nft Linker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderStyle>
        <Container>
          <div className="logo-wrapper">
            <Image
              loader={false}
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
            <div className="logo-name">NFT Linker</div>
          </div>
        </Container>
      </HeaderStyle>

      <MainStyle>
        <Container className="container">
          <div className="wrapper">
            <div className="title">
              <div className="title-highlight">
                <span className="highlight">NFT</span>{" "}
                <span>Verification for</span>
              </div>

              <div className="near-ico">
                <Image
                  loader={false}
                  src="/nearLogo.svg"
                  alt="logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="slogun">
                Connect your Near wallet and discord account to join Private
                Discord Channel for NFT Holders
              </div>
            </div>
            <div className="content-cards" ref={ref}>
              <div className="wrapper-cards">
                <div
                  className="card block-1"
                  onClick={
                    isConnected
                      ? () => nearlendSdk.logout()
                      : () => nearlendSdk.login()
                  }
                >
                  <div className="top-step">
                    <Image
                      loader={false}
                      src="/nearWallet.png"
                      alt="logo"
                      width={85}
                      height={85}
                    />
                    <div className="highlight normal-font"> step 1</div>
                  </div>
                  {!isConnected ? (
                    <div>Connect to Near Wallet</div>
                  ) : (
                    <div>
                      <div className="username">{nearAccount}</div>
                      <div className="normal-font connected">
                        Disconnect wallet
                      </div>
                    </div>
                  )}
                </div>
                <div className="arrow-line">
                  <Image
                    loader={false}
                    src="/arrowRight.svg"
                    alt="logo"
                    width={50}
                    height={10}
                  />
                </div>
                <div className="card block-2" onClick={discordConnect}>
                  <div className="top-step">
                    <Image
                      loader={false}
                      src="/nearDiscord.svg"
                      alt="logo"
                      width={85}
                      height={85}
                    />
                    <div className="highlight purple normal-font"> step 2</div>
                  </div>
                  {!!discordUsername ? (
                    <div>
                      <div className="username">
                        {discordUsername?.discordName}
                      </div>
                      <div className="normal-font connected">
                        Disconnect discord
                      </div>
                    </div>
                  ) : (
                    <div>Link to your Discord</div>
                  )}
                </div>
              </div>
            </div>
            {!!dataConnect && (
              <div
                className="notice-box"
                style={{
                  ...(dataConnect?.code === "200" ? successStyle : failStyle),
                  ...{ width: ref.current ? ref.current.offsetWidth : 0 },
                }}
              >
                {dataConnect?.msg}
              </div>
            )}

            <div className="description">
              <p>
                Note: If you have verified with us before, you don’t need to
                again. <br />
                Your access permission to Private Discord Channel will be lost
                if your wallet does not have any required NFTs
              </p>
            </div>
          </div>
        </Container>
      </MainStyle>

      <FooterStyle>
        <Container>
          <p className="des-footer">
            <span>a product of</span>
            <span className="img">
              <Image
                className="img"
                loader={false}
                src="/nearIco.png"
                alt="ico"
                width={"100%"}
                height={"100%"}
              />
            </span>
            <span>Nearlend DAO</span>
          </p>
          <FooterLinks />
        </Container>
      </FooterStyle>
    </Wrapper>
  );
}

const failStyle = {
  color: "#842029",
  backgroundColor: "#f8d7da",
  border: "1px solid ##f5c2c7",
  padding: "5px 10px",
  borderRadius: "5px",
};
const successStyle = {
  color: "#0f5132",
  backgroundColor: "#d1e7dd",
  border: "1px solid #badbcc",
  padding: "5px 10px",
  borderRadius: "5px",
};
