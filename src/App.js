import React from "react";

import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Global";
import dummyData from "./data/dummy";

// Dummy Data
const {
  banner01,
  banner02,
  banner03,
  banner04,
  links: { githubProfile },
} = dummyData;

// App
const App = () => {
  return (
    <>
      {/* View it on Expo Store */}
      <SectionWrapper
        title={banner01.title}
        description={banner01.description}
        showBtn
        mockupImg={banner01.image}
        banner="banner"
      />

      {/* Smart User Interface */}
      <SectionWrapper
        title={banner02.title}
        description={banner02.description}
        mockupImg={banner02.image}
        reverse
      />

      {/* Technologies */}
      <Features />

      {/* Deployment */}
      <SectionWrapper
        title={banner03.title}
        description={banner03.description}
        mockupImg={banner03.image}
        reverse
      />

      {/* showcase the store */}

      <SectionWrapper
        title={banner04.title}
        description={banner04.description}
        mockupImg={banner04.image}
        banner="banner02"
      />

      {/* Download Source Code */}
      <Download />

      {/* Footer */}
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        {/* Credits */}
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with ❤️ by{" "}
          <a
            className="font-bold "
            href={githubProfile}
            target="_blank"
            rel="noreferrer"
          >
            Sanidhya
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
