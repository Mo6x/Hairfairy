import React from "react";
import Items from "../../../Asserts/Items.png";
import FaceBook from "../../../Asserts/FaceBook.png";
import Instagram from "../../../Asserts/Instagram.png";
import Wistter from "../../../Asserts/Wistter.png";
import Styles from "./Section.module.css";




const SectionF: React.FC = () => {
  return (
    <div className={Styles.SectionFContainer}>
      <img src={Items} alt="Background Icon" className={Styles.BackgroundImages} />
      <div className={Styles.SectionFItems}>
        <h4 className={Styles.SectionFH4}>Beauity Better Experience</h4>
        <h1 className={Styles.SectionFh1}>Problems trying to resolve the conflict between</h1>
        <p className={Styles.SectionFParagraph}>
          Problems trying to resolve the conflict between the two major realms of Classical physics Hair:
        </p>
        <div className={Styles.SectionFPayment}>$16.48</div>
        <button className={Styles.SectionFButton}>ADD YOUR CALL TO ACTION</button>
      </div>
      <div className={Styles.SectionFooterContain}>
        <div className={Styles.SectionFooter}>
          <div className={Styles.SectionFooters}>
            <h1 className={Styles.SectionFooterH1}>Hairfairy.africa</h1>
            <div className={Styles.SectionFooterIcons}>
              <img src={FaceBook} alt="Social Media Icon" />
              <img src={Instagram} alt="Social Media Icon" />
              <img src={Wistter} alt="Social Media Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionF;

