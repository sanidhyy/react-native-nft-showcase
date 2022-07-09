import React from "react";

import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs.
        Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. 
        Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNet NFT Marketplace. Smooth constant colors of fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
};

export default App;
