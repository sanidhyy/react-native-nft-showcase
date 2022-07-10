import React from "react";

import assets from "../assets";
import styles from "../styles/Global";

// Feature Card
const FeatureCard = ({ iconURL, iconText }) => (
  <div className={styles.featureCard}>
    {/* Feature Icon */}
    <img src={iconURL} alt={iconText} className={styles.featureImg} />
    {/* Feature Text */}
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

// Features
const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        {/* Heading */}
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React
            Native.
          </p>
        </div>

        {/* Features Info */}
        <div className={styles.flexWrap}>
          <FeatureCard iconURL={assets.react} iconText="React Native" />
          <FeatureCard iconURL={assets.javascript} iconText="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Features;
