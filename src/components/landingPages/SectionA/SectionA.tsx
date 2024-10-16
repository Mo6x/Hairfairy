import React from "react";
import HairBrandOne from "../../../Asserts/HairBrandOne.png";
import hairBrandTwo from "../../../Asserts/hairBrandTwo.png";
import hairBrandThree from "../../../Asserts/HairBrandThree.png";
import HairBrandFour from "../../../Asserts/HairBrandFour.png";
import Styles from "./Section.module.css";



const SectionA: React.FC = () => {

  return (
    <div className={Styles.SectionAContainerMain}>
      <div className={Styles.SectionAContainer}>
        <div className={Styles.SectionImage}>
          <img src={HairBrandOne} alt="airBrand One" className={Styles.SectionImage} />
        </div>
        <div className={Styles.SectionImages}>
          <div className={Styles.ImageOne}>
          <img src={hairBrandTwo} alt="airBrand Two" className={Styles.airBrandBest} />
          </div>
          <div className={Styles.ImageTwo}>
            <div className={Styles.ImageChild}>
            <img src={hairBrandThree} alt="Furniture Three" className={Styles.ImageChilds} />
            </div>
            <div className={Styles.ImageChild}>
            <img src={HairBrandFour} alt="Furniture Four" className={Styles.ImageChilds} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionA;
