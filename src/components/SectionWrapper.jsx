import React from "react";

import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";
import dummyData from "../data/dummy";

// Section Wrapper
const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse ? " fadeRightMini" : " fadeLeftMini"
          } ${reverse ? styles.textRight : styles.textLeft}`}
        >
          {/* Title */}
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.h1Text
            }`}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.descriptionText
            }`}
          >
            {description}
          </p>

          {/* Button */}
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link={dummyData.links.expoAppStore}
            />
          )}
        </div>

        {/* Section Mockup Image */}
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="Mockup"
            className={`${reverse ? " fadeRightMini" : " fadeLeftMini"} ${
              styles.sectionImg
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
