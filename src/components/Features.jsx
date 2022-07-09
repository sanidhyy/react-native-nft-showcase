import React from "react";

import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconURL, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconURL} alt={iconText} className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React
            Native.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconURL={assets.react} iconText="React Native" />
          <FeatureCard iconURL={assets.javascript} iconText="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Features;
