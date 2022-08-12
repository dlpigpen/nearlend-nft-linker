import * as nearAPI from "near-api-js";
const { connect, WalletConnection, keyStores } = nearAPI;
import getConfig from "./config";

export class NearlendSdk {
  constructor() {
    if (NearlendSdk._instance) {
      throw new Error(
        "Singleton classes can't be instantiated more than once."
      );
    }
    NearlendSdk._instance = this;
    this.init();
    console.log("singleton created");
  }

  async init() {
    if (typeof window === "undefined") return;
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const nearConfig = getConfig(process.env.environment || "development");
    // console.log("evn: ", process.env.environment);
    const near = await connect(
      Object.assign({ deps: { keyStore: keyStore } }, nearConfig)
    );
    this.walletConnection = new WalletConnection(near);
  }

  getNearWallet() {
    return NearlendSdk._instance.walletConnection;
  }

  logout() {
    if (!this.walletConnection) {
      return;
    }
    this.walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  }

  login() {
    this.walletConnection.requestSignIn(getConfig.contractName);
  }

  getNearAccount() {
    if (!this.walletConnection) {
      return;
    }
    return this.walletConnection.getAccountId();
  }

  isLogged() {
    if (!this.walletConnection) {
      return;
    }
    return this.walletConnection.isSignedIn();
  }
}
