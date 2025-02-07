import React from "react";
import Styles from "./Section.module.css";


const SectionF: React.FC = () => {
  const videoUrl = process.env.REACT_APP_CLOUDINARY_VIDEO_URL;

  return (
    <div className={Styles.SectionFContainer}>
      <video autoPlay loop muted playsInline className={Styles.BackgroundVideo}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={Styles.SectionFItems}>
        <h4 className={Styles.SectionFH4}>Beauty Better Experience</h4>
        <h1 className={Styles.SectionFh1}>Problems trying to resolve the conflict between</h1>
        <p className={Styles.SectionFParagraph}>
          Problems trying to resolve the conflict between the two major realms of Classical physics Hair:
        </p>
        <div className={Styles.SectionFPayment}>$16.48</div>
        <button className={Styles.SectionFButton}>ADD YOUR CALL TO ACTION</button>
      </div>
    </div>
  );
};

export default SectionF;

